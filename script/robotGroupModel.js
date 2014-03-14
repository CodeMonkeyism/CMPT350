var robotGroupModel = {
    "attackPower" : "0",
    "defensePower": "0",
    "minDefense": "0",
    "HP": "0",
    "lossOfHp": "0",
    "robots": [],
    "init": function (){
        if (arguements.length = 0) {
            return false;
        };
        var totalDefense = 0;
        for (var i = arguements.length - 1; i >= 0; i--) {
            this.robots.push(arguements[i]);
            this.attackPower += arguements[i].attackPower;
            totalDefense += arguements[i].defensePower;
            if (arguements[i].defensePower >= this.minDefense) {
                this.minDefense = arguements[i].defensePower;
            };
            this.HP += arguements[i].HP;
        };
        this.defensePower = Math.floor(totalDefense/arguements.length);
    },
    "attack": function (target){
        // target should be an enemyModel.
        return target.defense(this.attackPower);
    },
    "defense": function(attackPower){
        
        if (attackPower < this.minDefense) {
            console.log("Invincible!")
        } else{
            int reducedAttackPower = attackPower - this.defensePower;
            if (reducedAttackPower < 1) {
                reducedAttackPower = 1;
            }
            this.lossOfHp += reducedAttackPower;
        };
        return this.HP >= this.lossOfHp;
    },
    "endFight": function(){
        int totalLossHp = this.lossOfHp;
        if (totalLossHp >= this.HP) {
            return [];
        } 
        else{
            int lossCount = Math.ceil(totalLossHp / this.HP * 10);

            randomLoss = this.robots.sort(function(a,b){return Math.random()>.5 ? -1 : 1;})
            return randomLoss.slice(lossCount);
        };
    }
}