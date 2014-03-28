var unlock = {
	//@Author: Xingze
	//unlock a building 
	unlockBuilding:function(buildID){
		$("#"+buildID).show();
		// console.log(buildID);
	},	

	//@Author: Xingze
	//refresh all build according the unlock status
	refreshUnlock:function(){
		var getLock = this.getAllLock();
		for(var i=0;i<getLock.length;i++){
			if(getLock[i][1]=="true"){
				console.log("unlock"+ getLock[i][0]);
				 // mainRoom._buildings[getLock[i][0].substring(4)].buttonID
				 console.log(getLock[i][0].substring(4,8));
				 if(getLock[i][0].substring(4,8)=="bld_")
					this.unlockBuilding(mainRoom._buildings[getLock[i][0].substring(4)].buttonID);
				 else{
				 	this.unlockBuilding(getLock[i][0].substring(4));
				 }
			}
		}
	},

	//@Author: Xingze
	//get all lock value
	getAllLock:function(){
		var allLock =new Array()
		var j = 0;
		for(var i=0;i<localStorage.length;i++){
			// console.log(localStorage.key(i));
			// console.log(localStorage.key(i).substring(0,4));
			if(localStorage.key(i).substring(0,4)=="lok_"){
				var lockName = localStorage.key(i);
				var lockValue = model.getData(lockName);
				// console.log(bulidName+"name");
				// console.log(bulidValue+"value");
				allLock[j] = [lockName,lockValue];
				// console.log(allLock[j]+"array");
				j++;
			}
		}
		return allLock;
	},	

	//@Author: Xingze
	//check if locked, true is locked, false otherwise
	ifLocked:function(key){
		var lockKey = "lok_"+key;
		console.log(model.getData(lockKey)+"~~~");
		if(model.getData(lockKey)=="false"){
			console.log("lock");
			return true;
		}
		else{ 
			console.log("unlock");
			return false;
		}
	},
};

// unlock.unlockBuilding("bld_Solar Cell");
