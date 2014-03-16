var enemyModel = {
    "attackPower" : "-1",
    "defensePower" : "-1",
    "HP": "-1",
    "weapon": [],
    "init" : function (attack, defense, HP) {
        // Try to parse Int.
        if (parseInt(attack) && parseInt(defense) && parseInt(HP)) {
            this.attackPower = parseInt(attack);
            this.defensePower = parseInt(defense);
            this.HP = parseInt(HP);
        } else{
            this.attackPower = 1;
            this.defensePower = 1;
            this.HP = 1;
        };
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
        int reducedAttackPower = attackPower - this.defensePower;
        if (reducedAttackPower < 1) {
	    //TODO: Insert code output to log window 
            console.log("Invincible!")
        } else{
            this.HP -= reducedAttackPower;
        };
        return this.HP <= 0;
    },
    "addWeapon":function(newWeapon){
        if (this.weapon.length >= 4) {
            console.log("Enemy could have 4 weapons at most.")
            return false;
        };
        switch(newWeapon){
            case "MetalFist":
                this.weapon.push("Metal Fist");
                this.attackPower += 5;
                break;
            case "Rocket":
                this.weapon.push("Rocket");
                this.attackPower += 10;
                break;
            case "LaserRifle":
                this.weapon.push("Laser Rifle");
                this.attackPower += 15;
                break;
            case "GattlingLaser":
                this.weapon.push("Gattling Laser");
                this.attackPower += 30;
                break;
            case default:
                this.weapon.push("Unknown Power");
                this.attackPower += Math.floor(Math.random() * 30 + 1);
                break;
        }
        return true;
    },
    "loot": function(){
	//TODO Insert loot code
	//Loot is determined by AP, DP and HP. Higher avgerage means better loot.
	//Depends on loot list
        console.log("To be determined.")
    }
}
