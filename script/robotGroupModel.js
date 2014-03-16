var robotGroupModel = {
    attackPower : 0,
    defensePower: 0,
    minDefense: 99999999,
    HP: 0,
    lossOfHp: 0,
    robots: [],
    create: function (){
        if (arguments.length == 0) {
            return false;
        };
        var newGroup = new Object(robotGroupModel);
        var totalDefense = 0;
        for (var i = arguments.length - 1; i >= 0; i--) {
            robotGroupModel.robots.push(arguments[i]);
            robotGroupModel.attackPower += arguments[i].attackPower;
            totalDefense += arguments[i].defensePower;
            if (arguments[i].defensePower < robotGroupModel.minDefense) {
                robotGroupModel.minDefense = arguments[i].defensePower;
            };
            robotGroupModel.HP += arguments[i].HP;
        };
        robotGroupModel.defensePower = Math.floor(totalDefense/arguments.length);
        return newGroup;
    },
    attack: function (target){
        // target should be an enemyModel.
        return target.defense(this.attackPower);
    },
    defense: function(attackPower){
        // If attack cannot break lowest defense:
        if (attackPower < this.minDefense) {
            console.log("Invincible!")
        } else{
	    // If defense is broken, then at least lose 1 HP.
            var reducedAttackPower = attackPower - this.defensePower;
            if (reducedAttackPower < 1) {
                reducedAttackPower = 1;
            }
            this.lossOfHp += reducedAttackPower;
        };
        console.log(this.HP);
        console.log(this.lossOfHp)
        return this.HP > this.lossOfHp;
    },
    endFight: function(){
        var totalLossHp = this.lossOfHp;
	// If total loss HP is larger than total HP, then you got a total loss.
        if (totalLossHp >= this.HP) {
            return [];
        } 
        else{
	    // Calcuate loss count.
            var lossCount = Math.floor(this.robots.length * totalLossHp / this.HP);
        // Sepicial fix: if group HP is too low, you should have robot returned.
            if (lossCount == this.robots.length) {
                lossCount -= 1;
            };
            console.log(lossCount);
	    // Randomly sort member and remove destoried member.
            randomLoss = this.robots.sort(function(a,b){return Math.random()>.5 ? -1 : 1;})
            return randomLoss.slice(lossCount);
        };
    }
}
