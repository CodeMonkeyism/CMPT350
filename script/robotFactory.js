robotFactory = {
    // All robot list
    idleList : [],
    // Basic attribute modification for attacker.
    // Also contains cost for attacker.
    ATTACKERMOD : {
        name:"Attacker",
        attackPowerMod : 7,
        defensePowerMod : 2,
        hpMod: 0,
        luckMod: 0,
        cost: {
            "res_Power" : 7,
            "res_Metal" : 10,
            "res_Lube"  : 6,
        }
        
    },
    // Basic attribute modification for defenser.
    // Also contains cost for defenser.
    DEFENSERMOD : {
        name:"Defenser",
        attackPowerMod : 2,
        defensePowerMod : 7,
        hpMod: 0,
        luckMod: 0,
        cost:{
            "res_Power" : 10,
            "res_Metal" : 7,
            "res_Lube"  : 6,
        }
        
    },
    // Basic attribute modification for gather.
    // Also contains cost for gather.
    GATHERMOD : {
        name:"Gather",
        attackPowerMod : 0,
        defensePowerMod : 0,
        hpMod: 2,
        luckMod: 7,
        cost: {
            "res_Power" : 6,
            "res_Metal" : 7,
            "res_Lube"  : 10,
        }
    },
    // Basic attribute modification for healer.
    // Also contains cost for healer.
    HEALERMOD : {
        name:"Healer",
        attackPowerMod : 0,
        defensePowerMod : 2,
        hpMod: 7,
        luckMod: 0,
        cost: {
            "res_Power" : 10,
            "res_Metal" : 10,
            "res_Lube"  : 10,
        }
    },
    // Basic attribute modification for other undefined types.
    // Also contains cost for other undefined types.
    BADMOD : {
        attackPowerMod : 0,
        defensePowerMod : 0,
        hpMod: 0,
        luckMod: 0,
        cost: {
            "res_Power" : 5,
            "res_Metal" : 5,
            "res_Lube"  : 5,
        }
    },
    // Constants for robot type.
    ATTACKER : "Attacker",
    DEFENSER : "Defenser",
    GATHER : "Gather",
    HEALER : "Healer",
    initButton : function() {
        $('#robotCraftList').empty();
        //need to refactor this part after group the type of robot.
        robotFactory.createButton("Attacker").appendTo($('#robotCraftList'));
        robotFactory.createButton("Defenser").appendTo($('#robotCraftList'));
        robotFactory.createButton("Gather").appendTo($('#robotCraftList'));
        robotFactory.createButton("Healer").appendTo($('#robotCraftList'));
        robotFactory.createExpeditionButton();

    },

    createButton : function(type) {
        //get cost by name.
        //need refactor if the structure changed.
        var theCost = null;
        $.each(robotFactory,function(index,value){
            if(value.name==type){
                theCost = value.cost;
                
            }
        });
        var b = new Button.Button({
            id: type+'CreateButton',
            text:'Create '+type,
            click:function(){
                robotFactory.createRobotWithRandomName(type); 
            },
            cost:theCost,
        });
        return b;


    },
    //create robot with random name.
    // Passing an undefined type (see constants for robot type) will
    // build a manfunctioned robot.
    // Will check if there is enough resource.
    // If the resource is not enough, a message will be post.
    // If the robot is built, it will be added in robotFactory.idleList.
    // A success message will also be posted.

    // @param {String} type robot's type.
    createRobotWithRandomName : function(type){
        var rand = robotName[Math.floor(Math.random() * robotName.length)];
        return robotFactory.createRobot(rand,type);
    },

    // Create a robot by given name and type.
    // Passing an undefined type (see constants for robot type) will
    // build a manfunctioned robot.
    // Will check if there is enough resource.
    // If the resource is not enough, a message will be post.
    // If the robot is built, it will be added in robotFactory.idleList.
    // A success message will also be posted.
    // @param {String} name robot's name.   
    // @param {String} type robot's type.
    createRobot : function (name, type) {
        // Create a new base robot.
        // Must define here, since new Object() is behaving oddly,
        // resulting robot has a strange name.
        var baseRobot = {
            robotName : "rob_" + name,
            attackPower : 5,
            defensePower : 5,
            HP: 5,
            luck: 5,
            robotType: ""
        };
        // Check resource. Will consume if enough.
        // If resource is not enough, post a message and return.
        if (!robotFactory.checkAndConsumeResource(type)) {
            Message.pushMessage('Not enough resource.');
            return;
        };        
        // Get basic attribute modification by given type
        switch(type){
            case robotFactory.ATTACKER:
                var modifier = robotFactory.ATTACKERMOD;
                break;
            case robotFactory.DEFENSER:
                var modifier = robotFactory.DEFENSERMOD;
                break;
            case robotFactory.GATHER:
                var modifier = robotFactory.GATHERMOD;
                break;
            case robotFactory.HEALER:
                var modifier = robotFactory.HEALERMOD;
                break;
            default:
                var modifier = robotFactory.BADMOD;
                baseRobot.robotType = "Malfunction";
                break;
        }        
        // If the robot is malfunctioned, send a message.
        // Also add it to robot list.
        if (modifier == robotFactory.BADMOD) {
            robotFactory.idleList.push(baseRobot);
            robotFactory.refreshRobotList();
            Message.pushMessage('Bad argument. You get a malfunctioned robot.')
            return;
        };
        
        // Randomly generate a modifier for this robot's main attribute.
        // If we get < 0.5, then bad luck. Main attribute will be reduced.
        var magic = Math.random() < 0.5 ? -1 : 1;
        var baseStat = 4;
        var randomStat = Math.ceil(magic * baseStat * Math.random());
        // Modify robot attribute by given type.
        baseRobot.robotType = type;
        baseRobot.attackPower += modifier.attackPowerMod;
        baseRobot.defensePower += modifier.defensePowerMod;
        baseRobot.HP += modifier.hpMod;
        baseRobot.luck += modifier.luckMod;
        // Modify main attribute.
        switch(type){
            case robotFactory.ATTACKER:
                baseRobot.attackPower += randomStat;
                break;
            case robotFactory.DEFENSER:
                baseRobot.defensePower += randomStat;
                break;
            case robotFactory.GATHER:
                baseRobot.luck += randomStat;
                break;
            case robotFactory.HEALER:
                baseRobot.HP += randomStat;
                break;
            default:
                break;
        }
        // Add the robot to list and post a message.
        robotFactory.idleList.push(baseRobot);
        robotFactory.refreshRobotList();
        Message.pushMessage('A new robot is created. it seems like a ' + type + ', you decided to call it '+ name+'.');
    },
    /**
     * Internal method. Should only be invoked by createRobot.
     * Try to consume resource to build a robot.
     * @param  {String} type The type of the robot.
     * @return {Boolean}     Whether the resource is consumed.
     */
    checkAndConsumeResource : function (type){
        // Get resource cost for different robots
        switch(type){
            case robotFactory.ATTACKER:
                var cost = robotFactory.ATTACKERMOD.cost;
                break;
            case robotFactory.DEFENSER:
                var cost = robotFactory.DEFENSERMOD.cost;
                break;
            case robotFactory.GATHER:
                var cost = robotFactory.GATHERMOD.cost;
                break;
            case robotFactory.HEALER:
                var cost = robotFactory.HEALERMOD.cost;
                break;
            default:
                var cost = robotFactory.BADMOD.cost;
                break;
        }
        // Check resource
        var isResourceEnough = false;
        for (var resource in cost) {
            if (model.getData(resource) >= cost[resource]) {
                isResourceEnough = true;
            } else{
                isResourceEnough = false;
                break;
            };
        };
        // Consume resource only if we have enough resource.
        if (isResourceEnough) {
            for (var resource in cost) {
                model.minus(resource,cost[resource]);
            };
        };
        return isResourceEnough;
    },

    /**
     * Create a robot by given robots.
     * Robots should be in an array.
     * Should give at least one robot, otherwise return false.
     * Returned object is described as an object:
     * {
            attackPower : total attack power of the group,
            defensePower: total defense power of the group,
            minDefense: the minimum defense power in the group,
            HP: total HP of the group,
            lossOfHp: this is for future use,
            healerCount : healer in the group,
            gatherCount : gather in the group,
            robots: the robots in the group
        };
     * @return {RobotGroup} See above.
     */
    createRobotGroup: function (robotList){
        // Create a new group.
        var newGroup = {
            attackPower : 0,
            defensePower: 0,
            minDefense: 99999999,
            HP: 0,
            lossOfHp: 0,
            healerCount :0,
            gatherCount :0,
            robots: [],
        };
        var totalDefense = 0;
        // Add robots into the group.
        for (var i = robotList.length - 1; i >= 0; i--) {
            // Add robot
            newGroup.robots.push(robotList[i]);
            // Calcuate total attack power
            newGroup.attackPower += robotList[i].attackPower;
            // Calcuate total defense power
            newGroup.defensePower += robotList[i].defensePower;
            // Find minimum defense power. 
            if (robotList[i].defensePower < newGroup.minDefense) {
                newGroup.minDefense = robotList[i].defensePower;
            };
            // Get healer count.
            if (robotList[i].robotType == robotFactory.GATHER) {
                newGroup.gatherCount += 1;
            };
            // Get healer count.
            if (robotList[i].robotType == robotFactory.HEALER) {
                newGroup.healerCount += 1;
            };
            // Calcuate total HP
            newGroup.HP += robotList[i].HP;
            robotFactory.removeRobot(robotList[i]);
        }
        return newGroup;
    },
    /**
     * Helper method for createRobotGroup().
     * Remove added robot from idle list.
     * @param  {Robot} robot robot to remove
     */
    removeRobot : function(robot) {
        var index = robotFactory.idleList.indexOf(robot);
        robotFactory.idleList.splice(index,1);
    },
    /**
     * Add robot list to user interface.
     */
    refreshRobotList: function (){
        $("#robotList").empty();
        for (var i = 0; i < robotFactory.idleList.length; i++) {
            var thisRobot = robotFactory.idleList[i];
            var selectBar = $('<div>').attr("class","robotButton").attr('id','robot'+i+'button').appendTo($("#robotList"));
            var selectCheckbox = $('<div>').attr('class','RowLeft').appendTo(selectBar);
            var selectText = $('<div>').appendTo(selectBar);
            $('<input>')
            .attr("type","checkbox")
            .attr("name","robotList")
            .attr("value",i)
            .appendTo(selectCheckbox);
            $('<div>').text(thisRobot.robotName.substring(4))           
            .appendTo(selectText);
            $('<div>').text(thisRobot.robotType+" "+thisRobot.attackPower+" " +thisRobot.defensePower+" "+thisRobot.HP+" "+thisRobot.luck)
            .appendTo(selectText);
        };
    },
    createExpeditionButton: function(){
        
        var b = new Button.Button({
            id: 'robotExpedition',
            text:'Go!',
            click:function(){
                var robotList=new Array();
                $("input[type='checkbox']:checked").each(
                    function(){
                        robotList.push(robotFactory.idleList[this.value]);
                       
                    });
                var level = $("input[type='radio']:checked").val();
                var group = robotFactory.createRobotGroup(robotList);
                console.log(group);

            },
        });
        $('<div>').attr("id","robotExpedition").append(b).appendTo($("#exploreContainer"));

    },
}
