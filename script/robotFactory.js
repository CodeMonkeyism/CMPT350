var robotFactory = {
    attackerList : [],
    defenserList : [],
    gatherList: [],
    healerList: [],
    malfunctionList : [],
    ATTACKERMOD : {
        attackPowerMod : 7,
        defensePowerMod : 2,
        hpMod: 0,
        luckMod: 0,
        powerMod : 2,
        metalMod : 5,
        fuelMod  : 1
    },
    DEFENSERMOD : {
        attackPowerMod : 2,
        defensePowerMod : 7,
        hpMod: 0,
        luckMod: 0,
        powerMod : 5,
        metalMod : 2,
        fuelMod  : 1,
    },
    GATHERMOD : {
        attackPowerMod : 0,
        defensePowerMod : 0,
        hpMod: 2,
        luckMod: 7,
        powerMod : 1,
        metalMod : 2,
        fuelMod  : 5,
    },
    HEALERMOD : {
        attackPowerMod : 0,
        defensePowerMod : 2,
        hpMod: 7,
        luckMod: 0,
        powerMod : 5,
        metalMod : 5,
        fuelMod  : 5,
    },
    ZEROMOD : {
        attackPowerMod : 0,
        defensePowerMod : 0,
        hpMod: 0,
        luckMod: 0,
        powerMod : 0,
        metalMod : 0,
        fuelMod  : 0,
    },
    ATTACKER : "Attacker",
    DEFENSER : "Defenser",
    GATHER : "Gather",
    HEALER : "Healer",
    createRobot : function (name, type) {
        // Create a new base robot.
        var baseRobot = {
            robotName : "rob_" + name,
            attackPower : 5,
            defensePower : 5,
            HP: 5,
            luck: 5,
            robotType: ""
        };
        // Check resource.
        if (!robotFactory.checkAndConsumeResource(type)) {
            return null;
        };        
        // Set basic attributes for different robots.
        switch(type){
            case robotFactory.ATTACKER:
                var modifier = robotFactory.ATTACKERMOD;
                robotFactory.attackerList.push(baseRobot);
                break;
            case robotFactory.DEFENSER:
                var modifier = robotFactory.DEFENSERMOD;
                robotFactory.defenserList.push(baseRobot);
                break;
            case robotFactory.GATHER:
                var modifier = robotFactory.GATHERMOD;
                robotFactory.gatherList.push(baseRobot);
                break;
            case robotFactory.HEALER:
                var modifier = robotFactory.HEALERMOD;
                robotFactory.healerList.push(baseRobot);
                break;
            default:
                var modifier = robotFactory.ZEROMOD;
                baseRobot.robotType = "Malfunction";
                robotFactory.malfunctionList.push(baseRobot);
                break;
        }
        // Add robot to group.
        
        // If the robot is malfunctioned, directly return it.
        if (modifier == robotFactory.ZEROMOD) {
            return baseRobot;
        };
        
        // Randomly generate a number for this robot.
        // If we get < 0.5, then bad luck. Attributes will be reduced.
        var magic = Math.random() < 0.5 ? -1 : 1;
        var baseStat = 4;
        var randomStat = Math.ceil(magic * baseStat * Math.random());
        // Modify robot attribute, set to basic by type.
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
        return baseRobot;
    },
    checkAndConsumeResource : function (type){
        // Base resource cost.
        var resourceCost = {
            Power : 5,
            Metal : 5,
            Fuel : 5,
        };
        // Set resource cost for different robots
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
                var modifier = robotFactory.ZEROMOD;
                break;
        }
        // Set Resource Cost:
        resourceCost.Power += modifier.powerMod;
        resourceCost.Metal += modifier.metalMod;
        resourceCost.Fuel += modifier.fuelMod;
        console.log("Consume Power:" + resourceCost.Power);
        console.log("Consume Metal:" + resourceCost.Metal);
        console.log("Consume Fuel:" + resourceCost.Fuel);
        // Check resource. 
        // If it is enough, spend resource and return true. Otherwise returns false.
        if (model.getData("res_Power") >= resourceCost.Power
            && model.getData("res_Metal") >= resourceCost.Metal
            && model.getData("res_Fuel") >= resourceCost.Fuel) {
            model.minus("res_Power",resourceCost.Power)
            model.minus("res_Metal",resourceCost.Metal)
            model.minus("res_Fuel",resourceCost.Fuel)
            return true;
        }
        else {
            return false;
        };
    },

    createRobotGroup: function (){
        // Guard: avoid zero argument.
        if (arguments.length == 0) {
            return false;
        };
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
        // Create robot group.
        for (var i = arguments.length - 1; i >= 0; i--) {
            // Add robot
            newGroup.robots.push(arguments[i]);
            // Calcuate total attack power
            newGroup.attackPower += arguments[i].attackPower;
            // Calcuate total defense power
            newGroup.defensePower += arguments[i].defensePower;
            // Find minimum defense power. 
            if (arguments[i].defensePower < newGroup.minDefense) {
                newGroup.minDefense = arguments[i].defensePower;
            };
            // Get healer count.
            if (arguments[i].robotType == robotFactory.GATHER) {
                newGroup.gatherCount += 1;
            };
            // Get healer count.
            if (arguments[i].robotType == robotFactory.HEALER) {
                newGroup.healerCount += 1;
            };
            // Calcuate total HP
            newGroup.HP += arguments[i].HP;
            robotFactory.removeRobot(arguments[i]);
        }
        return newGroup;
    },
    removeRobot : function(robot) {
        var robotType = robot.robotType;
        switch(robotType){
            case robotFactory.ATTACKER:
                var index = robotFactory.attackerList.indexOf(robot);
                robotFactory.attackerList.splice(index,1);
                break;
            case robotFactory.DEFENSER:
                var index = robotFactory.defenserList.indexOf(robot);
                robotFactory.defenserList.splice(index,1);
                break;
            case robotFactory.GATHER:
                var index = robotFactory.gatherList.indexOf(robot);
                robotFactory.gatherList.splice(index,1);
                break;
            case robotFactory.HEALER:
                var index = robotFactory.healerList.indexOf(robot);
                robotFactory.healerList.splice(index,1);
                break;
            case "Malfunction":
                var index = robotFactory.malfunctionList.indexOf(robot);
                robotFactory.malfunctionList.splice(index,1);
                break;
            default :
                break;
        }
    },
}