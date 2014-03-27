var unlock = {
	unlockBuilding:function(buildID){
		$("#"+buildID).show();
		console.log(buildID);
	},	


	refreshUnlock:function(){
		var getLock = this.getAllLock();
		for(var i=0;i<getLock.length;i++){
			if(getLock[i][1]=="true"){
				console.log("unlock"+ getLock[i][0]);
				 // mainRoom._buildings[getLock[i][0].substring(4)].buttonID
				this.unlockBuilding(mainRoom._buildings[getLock[i][0].substring(4)].buttonID);
			}
		}
	},

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
};

// unlock.unlockBuilding("bld_Solar Cell");
