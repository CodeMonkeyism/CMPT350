/**
Exploration events have the following structure:
{
    name: The exploration's name.
    description: The exploration's description.
    robotReturned : The robot returned after exploration,
    time: How much time will the exploration take,
    loot : A structure contains all resources obtained,
    result : A message reflecting exploration's loss.
}

Random Event has the structure as in RandomEvent.js.
{
    title: The random event's title,
    isAvailable: a function to judge whether this event is possible.
        scenes: {
            'start': {
                text: description of the event.
                notification: text to show in notification area.
                buttons:{
                    bottonName: {
                        text: bottonText,
                        nextScene: { possibility: nextSceneName, possibility: nextSceneName }
                    },...
                }
            },...
            sceneName: {
                text: ...,
                buttons: {...},
                }
            },...
        }
}
*/
Events = {
    activeEvent: null,
    activeScene: null,
    LevelName: {
        'safe Zone':1,
        'normal Zone':2,
        'bad Zone':3,
        'dangrous Zone':4,
        'dead Zone':5,
        'hell Zone':6,
    },
    exploreLevelOne : 1,
    exploreLevelTwo : 2,
    exploreLevelThree : 3,
    exploreLevelFour : 4,
    exploreLevelFive : 5,
    exploreLevelSix : 6,
    exploreLevelMax : 6,
    randomRoomEvent : "room",
    randomShipEvent : "ship",
    randomCloudEvent : "cloud",
    createRandomEvent  : function ( type ) {
        var baseEvent = {
            title: '',
            isAvailable : function() {
                return true;
            },
            scenes : {
                start : {
                    text : [],
                    notification : '',
                    buttons : {}
                }
            }
        }
        switch(type){
            case Events.randomRoomEvent :
                return Events.random.roomEvent(baseEvent);
                break;
            case Events.randomShipEvent :
                return Events.random.shipEvent(baseEvent);
                break;
            case Events.randomCloudEvent :
                return Events.random.CloudEvent(baseEvent);
                console.log('cloud!');
                break;
            default :
                return Events.random.unknownEvent(baseEvent);
        }
    },

    loadEvent: function(theEvent,theScene){
        if (theEvent!=null&&theEvent.isAvailable){  
            var thisScene= theEvent.scenes[theScene];
            Events.activeEvent = theEvent;
            Events.activeScene = theScene;  
            console.log(Events.activeScene);    
            $('#event').hide();
            $('#eventPanel').empty();

        //write event title into div
            $('#eventPanel').append($('<div>').attr("class",'title').text(theEvent.title));

        //write event text into div
            $('#eventPanel').append($('<div>').attr("id","eventDescription"));          
            if(thisScene.notification){
                Message.pushMessage(thisScene.notification);
            };
            
            for (var i = 0; i < thisScene.text.length; i++) {
                $('#eventDescription').append($('<div>').attr("class","eventText").text(thisScene.text[i])); 
            };
            if (thisScene.input) {
                $('<input>').attr('type','text').attr('id','username').attr('placeholder','username')
                .appendTo($('#eventDescription'));
                $('<input>').attr('type','password').attr('id','password').attr('placeholder','password')
                .appendTo($('#eventDescription'));

            };
        //put event button into div
            $('#eventPanel').append($('<div>').attr("id","eventButtons"));
            $.each(thisScene.buttons,function(index,value){
                var b = new Button.Button({
                    id: index,
                    text: value.text,
                    click: Events.clickButton,
                }).appendTo($("#eventButtons"));
            });
        //show the event.
            $('#event').show();
        } else {
            Message.pushMessage("Nothing special, everything goes normal.");
        }       
    },
    //some code of this method came from project A Dark Room 
    clickButton : function (theButton) {
        var value = Events.activeEvent.scenes[Events.activeScene].buttons[theButton.attr('id')];

        if (value.cost) {
        //TODO need code about handle cost/loot/etc of button.            
        };
        if (value.sideEffect) {
            value.sideEffect();
        };
        if (value.nextScene) {
            if(value.nextScene == 'end') {
                Events.endEvent();
            } else {
                var r = Math.random();
                var lowestMatch = null;
                for(var i in value.nextScene) {
                    if(r < i && (lowestMatch == null || i < lowestMatch)) {
                        lowestMatch = i;
                    }
                }
                if(lowestMatch != null) {
                    Events.loadEvent(Events.activeEvent,value.nextScene[lowestMatch]);
                    return;
                }
                Engine.log('ERROR: no suitable scene found');
                Events.endEvent();
            }
        }else{
            Engine.log("this button have no nextScene");
        };
    },

    endEvent: function() {
        Events.activeEvent = null;
        Events.activeScene = null;
        $("#event").hide();

    },

    explore : function (robotGroup, sceneLevel) {
        // Determine explore scene.
        switch(sceneLevel){
            case 1:
                var scenes = Events.exploreScene.tier1;
                break;
            case 2:
                var scenes = Events.exploreScene.tier2;
                break;
            case 3:
                var scenes = Events.exploreScene.tier3;
                break;
            case 4:
                var scenes = Events.exploreScene.tier4;
                break;
            case 5:
                var scenes = Events.exploreScene.tier5;
                break;
            case 6:
                var scenes = Events.exploreScene.tier6;
                break;
            default:
                var scenes = null;
                break;
        }

        // Null scene will automatically fail.
        if (scenes == null) {
            var result = {}
            Events._exploreFailed("Fell into space","Your robots fell to a hole, and flied off the plant.");
            return;
        };

        // Random choose a scene.
        var sceneIndex = Math.floor(Math.random() * scenes.length);
        var scene = scenes[sceneIndex];

        // If robot group is too weak, you failed.
        if (!Events.isExplorePossible(robotGroup, scenes[sceneIndex])) {
            Events._exploreFailed(scene.name, "You robots are too weak.");
            return;
        };
        
        // Robot loss reduce: max reduce 4 loss.
        var lossReduce = robotGroup.healerCount >=4 ? robotGroup.healerCount : 4;
        // Get the modifier of group power.
        var groupPowerModifier = Events.groupPowerModifier(robotGroup, scene);
        // The count of loss robot.
        // If group is powerful enough and you are lucky, you lose nothing.
        if ((Math.random() + groupPowerModifier) < scene.lossPossibility) {
            var lossCount = 0;
        } 
        else{
            // calcuate reduced loss count. Make sure the loss count is >= 0.
            // Group power could still reduce loss here.
            var lossCount = Math.floor(scene.lossCount * Math.random() * groupPowerModifier);
            lossCount = (lossCount - lossReduce) >= 0 ? (lossCount - lossReduce) : 0;
        };
        if (lossCount >= robotGroup.robots.length) {
            Events._exploreFailed(scene.name,"Though you explored that zone, all robots are down. You get nothing back.");
        };
        // Robot group removed lost robots.
        var randomGroup = robotGroup.robots.sort(function(a,b){return Math.random()>.5 ? -1 : 1;});
        var groupAfterExplore = randomGroup.slice(lossCount);

        // Resource modifier: each gather brings 10% more, max 50% for gathers.
        // Also plus group power modifier.
        // Max modifier: 200%
        var gatherModifier = (0.1 * robotGroup.gatherCount) >= 0.5 ? 0.5 : (0.1 * robotGroup.gatherCount);
        var resourceAdjust = (gatherModifier + groupPowerModifier + 1) >= 2 ? 2 : (gatherModifier + groupPowerModifier + 1);

        // Resource you got.
        var exploreLoot = new Object();
        for (var i = scene.loot.length - 1; i >= 0; i--) {
            if (scene.loot[i].rate > Math.random()) {
                console.log(scene.name);
                console.log(scene.loot[i].quantity);
                console.log(Math.ceil(scene.loot[i].quantity * resourceAdjust));
                exploreLoot[scene.loot[i].resourceName] = Math.ceil(scene.loot[i].quantity * resourceAdjust);
            }
            else {
                exploreLoot[scene.loot[i].resourceName] = 0;
            };
        };

        var result = {
            'exploreLoot' : exploreLoot,
            'robotsReturned' : groupAfterExplore,
            'lossCount': lossCount,
        }
        Events._createExploreResult(scene, result);

    },

    // Check attackPower, defensePower, HP and minGroupDefensePower.
    // If any fails, explore is failed.
    isExplorePossible : function(robotGroup, scene) {
        if (robotGroup.attackPower < scene.requirement.minAttackPower) {
            return false;
        };

        if (robotGroup.defensePower < scene.requirement.minDefensePower) {
            return false;
        };

        if (robotGroup.HP < scene.requirement.minHP) {
            return false;
        };

        return true;
    },

    _exploreFailed : function(name, description) {
        var btnOptions = {
            cooldown: 5,
            text: name,
        };
        var progressBar = new Button.Button(btnOptions);
        Button.cooldown(progressBar);
        // Return result
        setTimeout(function(){
            // Remove progress bar
            $(progressBar).remove();
            // Publish message
            Message.pushMessage(description);
        }, 5 * 1000)
        // Add progress bar
        $('div#robotArea').append(progressBar);
    },

    _createExploreResult: function(scene, result){
        var btnOptions = {
            cooldown: scene.time,
            text: scene.name,
        };
        var progressBar = new Button.Button(btnOptions);
        Button.cooldown(progressBar);
        // Publish message
        Message.pushMessage(scene.description);
        // Return result
        setTimeout(function(){
            // Remove progress bar
            $(progressBar).remove();
            // Publish message
            Message.pushMessage("Robots return... " + scene.results[result.lossCount]);
            // Add loot
            for(var item in result.exploreLoot){
                model.add(item,result.exploreLoot[item]);
            };
            // Add returned robots
            for (var i = result.robotsReturned.length - 1; i >= 0; i--) {
                robotFactory.idleList.push(result.robotsReturned[i]);
            };

        }, scene.time * 1000)
        // Add progress bar
        $('div#robotArea').append(progressBar);
    },

    groupPowerModifier : function(robotGroup, scene){
        // Product Index  = sum (group attribute / required min attribute - 1)
        // Max index: 1 
        var hpMod = robotGroup.HP / scene.requirement.minHP - 1;
        var attackMod = robotGroup.attackPower / scene.requirement.minAttackPower - 1;
        var defenseMod = robotGroup.defensePower / scene.requirement.minDefensePower - 1;
        var productIndex = (hpMod + attackMod + defenseMod) > 1 ? 1 : (hpMod + attackMod + defenseMod);
        return productIndex;
    },

    initExplorePanel : function(){
        $("#zoneList").empty();
        $.each(Events.LevelName, function(key,value){
            var zone = $('<div>')
            .attr("id",'zone'+value+'button')
            .attr("class","zone")
            .appendTo($("#zoneList"));
            $('<input>').attr('type','radio')
            .attr('value',value).attr('name','zone').appendTo(zone);
            $('<p>').text(key).appendTo(zone);
        });
    },
    startRandomEvent : function(){
        var eventName = randomEventType[Math.floor(Math.random() * randomEventType.length)];
        var theEvent = Events.createRandomEvent(eventName);
        var theScene = 'start';
        Events.loadEvent(theEvent,theScene);
    },

}
