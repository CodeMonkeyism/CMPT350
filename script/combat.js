var combat = {
    "mEnemy": [],
    "mRobots": [],
    "init": function(enemy, robotGroup){
        this.mEnemy = enemy;
		this.mRobots = robotGroup;
    },
    "doCombat": function(){
	// Robots attack first.
	while(mRobots.attack(mEnemy)){
	    // If robots group cannot successfully defend attack,
	    // then the combat is lost.
	    if (!mEnemy.attack(mRobots)){
		this.finishCombat(false);
            }
	}
	// If reached here, that means enemy cannot successfully defend attack.
	// you win.
	this.finishCombat(true);
    },
    "finishCombat": function(isCombatWin){
    //show combat result, include loot and loss
	//Return an array, the first is loss ( from the robots), the second is loot (from enemy).
	//TODO see notification code to determine.
	var result = new Array();
	result[0] = mRobots.endFight();
	if (isCombatWin) {
	    result[1] = mEnemy.loot();
	}
	else{
	    result[1] = null;
	}
	return result;
    }
}
