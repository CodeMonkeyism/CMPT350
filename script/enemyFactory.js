var enemyFactory = {
    "attackPower" : "-1",
    "defensePower" : "-1",
    "HP": "-1",
    "create" : function (attack, defense, HP) {
        // Try to parse Int.
        newEnemy = new Object(enemyFactory);
        if (parseInt(attack) && parseInt(defense) && parseInt(HP)) {
            newEnemy.attackPower = parseInt(attack);
            newEnemy.defensePower = parseInt(defense);
            newEnemy.HP = parseInt(HP);
        } else{
            newEnemy.attackPower = 1;
            newEnemy.defensePower = 1;
            newEnemy.HP = 1;
            return newEnemy;
        };
        return newEnemy;
    },
    "attack": function(target) {
        // Target should be a robotGroupModel
	// If attack missed, this turn is not the final turn.
	if(Math.random() < weapon.length * 0.1) {
	    return true;
	}
        return target.defense(this.attackPower);
    },
    "defense": function(attackPower) {
        var reducedAttackPower = attackPower - this.defensePower;
        if (reducedAttackPower < 1) {
	    //TODO: Insert code output to log window 
            console.log("Invincible!")
        } else{
            this.HP -= reducedAttackPower;
        };
        return this.HP <= 0;
    },
    "loot": function(){
	//TODO Insert loot code
	//Loot is determined by AP, DP and HP. Higher avgerage means better loot.
	//Depends on loot list
    console.log("To be determined.")
    }
}
