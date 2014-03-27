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

	metalSpeed : "0",
	frameSpeed : "0",
	gearSpeed : "0",
	//rescourse speed
	powerGrow : "0",
	scrapGrow : "0",
	lubeGrow : "0",

	metalGrow : "0",
	frameGrow : "0",
	gearGrow : "0",

	//decrease speed
	powerDecrease :"0",
	scrapDecrease : "0",
	lubeDecrease : "0",


	//building switch
	solarCellButton : false,
	chargingPostButton : false,

    init: function(){
    	 $( document ).ready(function() {

    	 //TODO for test 
    	 // init rescourse and building 
    	 model.setData("res_Power",100);
		 model.setData("res_Scrap",100);
         model.setData("res_Lube",100);

         model.setData("res_Metal",110);
         model.setData("res_Frame",110);
         model.setData("res_Gear",110);


    	 model.setData("bld_Solar Cell",0);
		 model.setData("bld_Scrap Heap",0);
         model.setData("bld_Workshop",0);
         model.setData("bld_Charging Post",0);
         model.setData("bld_Worker Robot Factory",0);
         model.setData("bld_Attacker Robot Factory",0);
         model.setData("bld_Defenser Robot Factory",0);
         model.setData("bld_Gather Robot Factory",0);
         model.setData("bld_Healer Robot Factory",0);


         //true is unlocked, false is locked
         // model.setData("lok_Worker Robot",false);
         // model.setData("lok_Attacker Robot",false);
         // model.setData("lok_Defenser Robot",false);
         // model.setData("lok_Gather Robot",false);

         // model.setData("lok_Gather Robot",false);        

        engine.initGUI();
    	showResource.refreshRes();
    	showResource.refreshBuild();
    	Events.initExplorePanel(); 	
    	engine.calcResSpeed();
    	engine.setTimer(delay);
    	robotFactory.initButton();

    	building.pushAllBuilButton();
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
		this.powerSpeed = parseInt(this.powerGrow) + parseInt(this.powerDecrease);
		
		if(localStorage.getItem("res_Power")>0){
			this.scrapSpeed = parseInt(this.scrapGrow) + parseInt(this.scrapDecrease);
		}else{
			this.scrapSpeed = 0; 
		}
		
		if(localStorage.getItem("res_Power")>0){
			this.lubeSpeed = parseInt(this.lubeGrow) + parseInt(this.lubeDecrease);
		}else{
			this.lubeSpeed = 0; 
		}

		if(localStorage.getItem("res_Power")>0||localStorage.getItem("res_Scrap")>0){
			this.metalSpeed = parseInt(this.metalGrow) + parseInt(this.metalDecrease);
		}else{
			this.metalSpeed = 0; 
		}

		if(localStorage.getItem("res_Power")>0||localStorage.getItem("res_Metal")>0){
			this.frameSpeed = parseInt(this.frameGrow);
		}else{
			this.frameSpeed = 0; 
		}

		if(localStorage.getItem("res_Power")>0||localStorage.getItem("res_Metal")>0){
			this.gearSpeed = parseInt(this.gearGrow);
		}else{
			this.gearSpeed = 0; 
		}

		// console.log("powerSpeed is "+ this.powerSpeed);
		// metalSpeed = 1;

	},

	calcGrowSpeed: function(){
		//TODO finished res speed calc
		this.powerGrow = parseInt(powerPerCell)*parseInt(localStorage.getItem("bld_Solar Cell"));
		this.lubeGrow = parseInt(Workers._Duty.Pumper.res_Lube*localStorage.getItem("wkr_Pumper"));
		this.scrapGrow = parseInt(Workers._Duty.Scavenger.res_Scrap*localStorage.getItem("wkr_Scavenger"));
		this.metalGrow = parseInt(Workers._Duty.Foundryman.res_Metal*localStorage.getItem("wkr_Foundryman"));
		this.frameGrow = parseInt(Workers._Duty.Bender.res_Frame*localStorage.getItem("wkr_Bender"));
		this.gearGrow = parseInt(Workers._Duty.Bender.res_Gear*localStorage.getItem("wkr_Bender"));
		// console.log("powerSpeed is "+ this.powerSpeed);
		// metalSpeed = 1;
	},

	calcDecreaseSpeed: function(){
		//TODO finished res speed calc
		// this.powerSpeed = parseInt(this.powerSpeed) + parseInt(powerPerCell)*parseInt(localStorage.getItem("bld_Solar Cell"));
		 scavengerWorking = 0;
		 foundrymanWorking = 0;
		 benderWorking = 0;
		 pumperWorking = 0;


		if(this.scrapSpeed>0)
			scavengerWorking = 1;

		if(this.metalSpeed>0)
			foundrymanWorking = 1;

		if(this.frameSpeed>0)
			benderWorking = 1;

		if(this.lubeSpeed>0)
			pumperWorking = 1;


		this.powerDecrease = parseInt(Workers._Duty.Scavenger.res_Power*localStorage.getItem("wkr_Scavenger"))//*scavengerWorking)
							+parseInt(Workers._Duty.Foundryman.res_Power*localStorage.getItem("wkr_Foundryman"))//*foundrymanWorking)
							+parseInt(Workers._Duty.Bender.res_Power*localStorage.getItem("wkr_Bender"))//*benderWorking)
							+parseInt(Workers._Duty.Pumper.res_Power*localStorage.getItem("wkr_Pumper"));//*pumperWorking);

		this.scrapDecrease = parseInt(Workers._Duty.Foundryman.res_Scrap*localStorage.getItem("wkr_Foundryman"))//*this.foundrymanWorking);

		this.metalDecrease = parseInt(Workers._Duty.Bender.res_Metal*localStorage.getItem("wkr_Bender"))//*this.benderWorking);
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

		model.add("res_Metal",this.metalSpeed);
		model.add("res_Frame",this.frameSpeed);
		model.add("res_Gear",this.gearSpeed);

		
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
		//create building Area
		$("#RoomPanel").append(
			$("<div>").attr("id","BuildingListContainer").append(
				$("<div>").attr("id","BuildingList").attr("class","Area")
			)
		);
		//create worker Area
		$("#WorkShopPanel").append(
			$("<div>").attr("id","workerListContainer").append(
				$("<div>").attr("id","workerList").attr("class","Area")
			)
		);
		//create robot craft Area
		$("#RoomPanel").append(
			$("<div>").attr("id","robotCraftListContainer").append(
				$("<div>").attr("id","robotCraftList").attr("class","Area")
			)
		);
		Workers.refreshWorkerData();
		// Create outside Area
		// Include two sub area: robot list and zone list
		$("#OutsidePanel").append(
			$("<div>").attr("id","exploreContainer").append(
				[$("<div>").attr("id","robotList"),
				$("<div>").attr("id","zoneList")]
			)
		);

		$("#menuAreaContainer").append(
			$('<div>').attr('class','bottomButton').append(
				$('<div>').click($CSM.openCloud).text('cloud save')
			)
		);
		//set page to first page.
		var firstButtonId = "#"+HeadButtonName[0]+"Button";
		$(firstButtonId).click();

				//test code, for showing how create button.
				//will be delete after create building buttons.
				var secondPageId = "#"+HeadButtonName[1]+"Panel";
				$(secondPageId).append($('<div>')
					.attr("id","gatherButton")
				);
				new Button.Button({
					id: 'gatherWorker',
					text: "Walk around",
					click: function(){

						Message.pushMessage('everything is covered by darkness, only slience above head.');
					},
					cooldown: 50,
				}).appendTo('div#gatherButton');
				new Button.Button({
					id: 'gatherPower',
					text: "Change Battery",
					click: function(){
						model.add('res_Power',30);
						Message.pushMessage('Link an empty battery to solar system, get a full one back.');
					},
					cooldown: 60,
				}).appendTo('div#gatherButton');
				new Button.Button({
					id: 'gatherScrap',
					text: "Retrieve Scarp",
					click: function(){
						model.add('res_Scrap',30);
						Message.pushMessage('collect a bag of scarp will take time, not every piece of them useful.');
					},
					cooldown: 90,
				}).appendTo('div#gatherButton');
				new Button.Button({
					id: 'gatherLube',
					text: "Retrieve Lube",
					click: function(){
						model.add('res_Lube',15);
						Message.pushMessage('barrel is too heavy, fill it need some time.');
					},
					cooldown: 40,
				}).appendTo('div#gatherButton');


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

