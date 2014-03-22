/**
*@author Xingze Guo
*change valuse of varible 
*/
var HeadButtonName = ["Room","WorkShop","Outside"];

engine = {
	
	//TODO  finish all resource
	//rescourse speed
	powerSpeed : "1",
	scrapSpeed : "1",
	lubeSpeed : "1",

	//building switch
	solarCellButton : false,
	chargingPostButton : false,

    init: function(){
    	 $( document ).ready(function() {
    	showResource.refreshRes();
    	showResource.refreshBuild();
    	engine.initGUI();
    	engine.calcResSpeed();
  		});
	},

/**
*@author: Xingze
*calculate growth speed of resescourse 
*/
	calcResSpeed: function(){
		//TODO finished res speed calc
		this.powerSpeed = parseInt(this.powerSpeed) + parseInt(localStorage.getItem("bld_solar cell"));
		console.log("powerSpeed is "+ this.powerSpeed);
		// metalSpeed = 1;
	},


	cancelTimer: function(){
		console.log(timer+"timer~~~~~~~~~~~~~~~~~");
		for(var j=0;j<timer.length;j++){
			clearInterval(timer[j]);
		}	

	},

	/**
	*@author:Xingze
	* res added one time
	*/
	setGrow: function(){
		model.add("res_power",this.powerSpeed);
		model.add("res_metal",this.metalSpeed);
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
		new Button.Button({
			id: 'gatherButton',
			text: "gather wood",
			click: 0,
			cooldown: 10,
		}).appendTo('div#buildingButton');
	},


		/**
	@author:Xingze
	@param action add/minus/multiply/divide
	@param name name of items
	@param parameter parameter of add/minus/multiply/divide method
	@param delay the gap of two actions
	@param times the length of loop time
	*/

	setTimer:function(action,delay){
		var i=0;
		var id;
		if(action == "add"){
			 id=setInterval(function(){
				engine.setGrow();
				// engine.initBuilding();
				showResource.refreshRes();			
				// console.log(model.getData(name));
			},delay);
		}
		return id;
	},

	// Gets a guid
	//this method Copied from A Dark Room Code.
	getGuid: function() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		    return v.toString(16);
		});
	},
	//this method Copied from A Dark Room Code.
	log: function(msg) {
		if(this._log) {
			console.log(msg);
		}
	},
}
	


var testEngin= Object.create(engine);
testEngin.init();

