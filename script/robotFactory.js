var robotFactory = {
    create : function (name, type) {
        if (!robotFactory.isResourceEnough(type)) {
            return null;
        };
        // Create a new base robot.
        var baseRobot = {
            robotName : type + " " + name,
            attackPower : 5,
            defensePower : 5,
            HP: 5,
            luck: 5
        };
        // Randomly generate a number for this robot.
        // If we get < 0.5, then bad luck. Attributes will be reduced.
        var magic = Math.random() < 0.5 ? -1 : 1;
        var baseStat = 4;
        var randomStat = Math.ceil(magic * baseStat * Math.random());
        // Set attributes for different robots.
        switch(type){
            case "S.W.O.R.D.":
                baseRobot.attackPower += (7 + randomStat);
                baseRobot.defensePower += 2;
                break;
            case "S.H.I.E.L.D.":
                baseRobot.attackPower += 2;
                baseRobot.defensePower += (7 + randomStat);
                break;
            case "Gather":
                baseRobot.luck += (7 + randomStat);
                baseRobot.HP += 2
                break;
            case "Paladin":
                baseRobot.defensePower += 2;
                baseRobot.HP += (7 + randomStat);
                break;
            default:
                baseRobot.attackPower = 1;
                baseRobot.defensePower = 1;
                baseRobot.luck = 1;
                baseRobot.HP =1;
                baseRobot.robotName = "Malfunction"
                break;
        }

        return baseRobot;
    },
    isResourceEnough : function (type){
        // Base resource cost.
        var resourceCost = {
            Power : 5,
            Metal : 5,
            Fuel : 5,
        }
        // Get resource details

        // Set resource cost for different robots
        switch(type){
            case "S.W.O.R.D.":
                resourceCost.Power += 2;
                resourceCost.Metal += 5;
                resourceCost.Fuel  += 1;
                break;
            case "S.H.I.E.L.D.":
                resourceCost.Power += 5;
                resourceCost.Metal += 2;
                resourceCost.Fuel  += 1;
                break;
            case "Gather":
                resourceCost.Power += 1;
                resourceCost.Metal += 2;
                resourceCost.Fuel  += 5;
                break;
            case "Paladin":
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