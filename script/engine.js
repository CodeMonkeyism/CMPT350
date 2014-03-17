/**
*@author Xingze Guo
*change valuse of varible 
*/


engine = {
    init: function(){
    	 $( document ).ready(function() {
    	showResource.refreshRes();
    	showResource.refreshBuild();

  		});
	},

	resAdd: function(){
		timer =new Array();
		var getRes = showResource.getAllResName();
		for(var i=0;i<getRes.length;i++){
				// setTimer:function(action,name,parameter,delay,period){
			timer[i]=model.setTimer("add",getRes[i][0],1,1000,99999)
		}
		console.log(timer+"timerOOO");
		return timer; 
	},

	cancelTimer: function(){
		console.log(timer+"timer~~~~~~~~~~~~~~~~~");
		for(var j=0;j<timer.length;j++){
			clearInterval(timer[j]);
		}	

	}
}

var testEngin= Object.create(engine);
testEngin.init();

