/**
*@author Xingze Guo
*change valuse of varible 
*/
var HeadButtonName = ["Room","WorkShop","Outside"];

engine = {
	



    init: function(){
    	 $( document ).ready(function() {
    	showResource.refreshRes();
    	showResource.refreshBuild();
    	engine.initGUI();
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

	},

	initGUI: function(){
		//create headButtonArea
		$("<div>").attr("id","headButtonArea")
			.appendTo($("div#header"));
		HeadButtonName.forEach(function(name){
			//create AreaChoose button
			$('<button>').html(name)
			.attr("id",name+"Button")
			.click(function(){
			//when click, show the panel which have same name.
				$("div.Panel").hide();
				var thisPanelId = "#"+name+"Panel";
				$(thisPanelId).show()
			})
			.appendTo($("div#headButtonArea"));	
			//Create Area
			$('<div>')
			.attr("id",name+"Panel")
			.attr("class","Panel")
			.appendTo($("#mainAreaRoller"));
		});
		var secondPageId = "#"+HeadButtonName[0]+"Panel";
		$(secondPageId).append($('<div>')
			.attr("id","buildingButton").append("test")
		);
	}
}
	


var testEngin= Object.create(engine);
testEngin.init();

