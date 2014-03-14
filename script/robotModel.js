var robotModel = {
    "attackPower" : "-1",
    "defensePower" : "-1",
    "HP": "-1",
    "powerCost": "0",
    "metalCost": "0",
    "fuelCost":  "0",
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
    "setCost" : function (power, metal, fuel){
        if (parseInt(power) && parseInt(metal) && parseInt(fuel)) {
            this.powerCost = parseInt(power);
            this.metalCost = parseInt(metal);
            this.fuelCost = parseInt(fuel);
        } else{
            this.powerCost = 1;
            this.metalCost = 1;
            this.fuelCost = 1;
        };
    },
    "produce" : function(){
        console.log("Not implemented")
    }

}