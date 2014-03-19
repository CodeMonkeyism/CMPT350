var Events = {
    exploreLevelOne : 1,
    exploreLevelTwo : 2,
    exploreLevelThree : 3,
    exploreLevelFour : 4,
    exploreLevelFive : 5,
    exploreLevelSecret : 6,
    randomRoomEvent : "room",
    randomShipEvent : "ship",
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
            default :
                return Events.random.unknownEvent(baseEvent);
        }
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
            return Events.exploreFailed("Your robots fell to a hole, and flied off the plant.");
        };

        // Random choose a scene.
        var sceneIndex = Math.floor(Math.random() * scenes.length);

        // If robot group is too weak, you failed.
        if (!Events.isExplorePossible(robotGroup, scenes[sceneIndex])) {
            return Events.exploreFailed("You robots are too weak.");
        };
        

        
        // The count of loss robot.
        if (Math.random() < scenes[sceneIndex].lossPossibility) {
            var lossCount = 0;
        } 
        else{
            var lossCount = Math.floor(scenes[sceneIndex].lossCount * Math.random());
        };
        if (lossCount >= robotGroup.robots.length) {
            return Events.exploreFailed("Though you explored that zone, all robots are down. You get nothing back.");
        };
        // Robot group removed lost robots.
        var randomGroup = robotGroup.robots.sort(function(a,b){return Math.random()>.5 ? -1 : 1;});
        var groupAfterExplore = randomGroup.slice(lossCount);

        // Resource you got.
        var exploreLoot = new Object();
        for (var i = scenes[sceneIndex].loot.length - 1; i >= 0; i--) {
            if (scenes[sceneIndex].loot[i].rate > Math.random()) {
                exploreLoot[scenes[sceneIndex].loot[i].resourceName] = scenes[sceneIndex].loot[i].quantity;
            }
            else {
                exploreLoot[scenes[sceneIndex].loot[i].resourceName] = 0;
            };
        };
        console.log(exploreLoot);

        return {
            robotReturned : groupAfterExplore,
            time: scenes[sceneIndex].time,
            loot : exploreLoot,
            result : scenes[sceneIndex].results[lossCount]
        }

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

        if (robotGroup.minDefense < scene.requirement.minGroupDefensePower) {
            return false;
        };

        return true;
    },

    exploreFailed : function(description) {
        return {
                robotReturned : [],
                time : 0,
                loot : {res_Power : 0,
                        res_Metal : 0,
                        res_Fuel : 0},
                result : description
            }
    },
}