var robotFactory = {
    BASECOST : {
            Power : 5,
            Metal : 5,
            Fuel : 5,
    },
    ATTACKER : "Attacker",
    DEFENSER : "Defenser",
    GATHER : "Gather",
    HEALER : "Healer",
    create : function (name, type) {
        if (!robotFactory.checkAndConsumeResource(type)) {
            return null;
        };
        // Create a new base robot.
        var baseRobot = {
            robotName : "rob_" + name,
            attackPower : 5,
            defensePower : 5,
            HP: 5,
            luck: 5,
            robotType: type
        };
        // Randomly generate a number for this robot.
        // If we get < 0.5, then bad luck. Attributes will be reduced.
        var magic = Math.random() < 0.5 ? -1 : 1;
        var baseStat = 4;
        var randomStat = Math.ceil(magic * baseStat * Math.random());
        // Set attributes for different robots.
        switch(type){
            case robotFactory.ATTACKER:
                baseRobot.attackPower += (7 + randomStat);
                baseRobot.defensePower += 2;
                break;
            case robotFactory.DEFENSER:
                baseRobot.attackPower += 2;
                baseRobot.defensePower += (7 + randomStat);
                break;
            case robotFactory.GATHER:
                baseRobot.luck += (7 + randomStat);
                baseRobot.HP += 2
                break;
            case robotFactory.HEALER:
                baseRobot.defensePower += 2;
                baseRobot.HP += (7 + randomStat);
                break;
            default:
                baseRobot.attackPower = 1;
                baseRobot.defensePower = 1;
                baseRobot.luck = 1;
                baseRobot.HP =1;
                baseRobot.robotType = "Malfunction"
                break;
        }

        return baseRobot;
    },
    checkAndConsumeResource : function (type){
        // Load base resource cost.
        var resourceCost = new Object(robotFactory.BASECOST);
        // Set resource cost for different robots
        switch(type){
            case robotFactory.ATTACKER:
                resourceCost.Power += 2;
                resourceCost.Metal += 5;
                resourceCost.Fuel  += 1;
                break;
            case robotFactory.DEFENSER:
                resourceCost.Power += 5;
                resourceCost.Metal += 2;
                resourceCost.Fuel  += 1;
                break;
            case robotFactory.GATHER:
                resourceCost.Power += 1;
                resourceCost.Metal += 2;
                resourceCost.Fuel  += 5;
                break;
            case robotFactory.HEALER:
                resourceCost.Power += 5;
                resourceCost.Metal += 5;
                resourceCost.Fuel  += 5;
                break;
            default:
                break;
        };
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
    }
}