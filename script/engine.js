/**
*@author Xingze Guo
*change valuse of varible 
*/
var HeadButtonName = ["Room","WorkShop","Outside"];
var powerPerCell = 5;
var delay = 1000;   //res add per 
  
engine = {
	
	//TODO  finish all resource
	// total speed
	powerSpeed : "0",
	scrapSpeed : "0",
	lubeSpeed : "0",
	//rescourse speed
	powerGrow : "3",
	scrapGrow : "3",
	lubeGrow : "3",

	//decrease speed
	powerDecrease :"1",
	scrapDecrease : "1",
	lubeDecrease : "1",

	//building switch
	solarCellButton : false,
	chargingPostButton : false,

    init: function(){
    	 $( document ).ready(function() {

    	 //init rescourse and building 
    	 model.setData("res_Power",0);
		 model.setData("res_Scrap",0);
         model.setData("res_Lube",0);

    	 model.setData("bld_Solar Cell",0);
		 model.setData("bld_Scrap Heap",0);
         model.setData("bld_Factory",0);
         model.setData("bld_Charging Post",0);

    	showResource.refreshRes();
    	showResource.refreshBuild();
    	engine.initGUI();
    	engine.calcResSpeed();
    	engine.setTimer(delay);
  		});
	},

/**
*@author: Xingze
*calculate growth speed of resescourse 
*/
	calcResSpeed: function(){
		//TODO finished res speed calc
		this.calcGrowSpeed();
		this.calcDecreaseSpeed();
		// this.powerSpeed = parseInt(this.powerSpeed) + parseInt(powerPerCell)*parseInt(localStorage.getItem("bld_Solar Cell"));
		this.powerSpeed = parseInt(this.powerGrow) - parseInt(this.powerDecrease);
		this.scrapSpeed = parseInt(this.scrapGrow) - parseInt(this.scrapDecrease);
		this.lubeSpeed = parseInt(this.lubeGrow) - parseInt(this.lubeDecrease);
		// console.log("powerSpeed is "+ this.powerSpeed);
		// metalSpeed = 1;



	// powerSpeed : "0",
	// scrapSpeed : "0",
	// lubeSpeed : "0",
	// //rescourse speed
	// powerGrow : "3",
	// scrapGrow : "3",
	// lubeGrow : "3",

	// //decrease speed
	// powerDecrease :"1",
	// scrapDecrease : "1",
	// lubeDecrease : "1",
	},

	calcGrowSpeed: function(){
		//TODO finished res speed calc
		this.powerGrow = parseInt(powerPerCell)*parseInt(localStorage.getItem("bld_Solar Cell"));
		// console.log("powerSpeed is "+ this.powerSpeed);
		// metalSpeed = 1;
	},

	calcDecreaseSpeed: function(){
		//TODO finished res speed calc
		// this.powerSpeed = parseInt(this.powerSpeed) + parseInt(powerPerCell)*parseInt(localStorage.getItem("bld_Solar Cell"));
		this.powerDecrease = "1";
		// console.log("powerSpeed is "+ this.powerSpeed);
		// metalSpeed = 1;
	},



	cancelTimer: function(){
		// console.log(timer+"timer~~~~~~~~~~~~~~~~~");
		for(var j=0;j<timer.length;j++){
			clearInterval(timer[j]);
		}	

	},

	/**
	*@author:Xingze
	* res added one time
	*/
	setGrow: function(){
		model.add("res_Power",this.powerSpeed);
		model.add("res_Scrap",this.scrapSpeed);
		model.add("res_Lube",this.lubeSpeed);

		
	},


	/**
	@author:Xingze
	@param action add/minus/multiply/divide
	@param name name of items
	@param parameter parameter of add/minus/multiply/divide method
	@param delay the gap of two actions
	@param times the length of loop time
	*/

	setTimer:function(delay){
		var id;
		// if(action == "add"){
			 id=setInterval(function(){
				engine.setGrow();
				// engine.initBuilding();
				showResource.refreshRes();			
				// console.log(model.getData(name));
			},delay);
		// }
		return id;
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
			// console.log(msg);
		}
	},


	//@author Xingze
	//button of build building
	
}
	


var testEngin= Object.create(engine);
testEngin.init();

