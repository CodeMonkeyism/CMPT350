var mainRoom = {
	name: 'mainRoom',

	_buildings: {
		'bld_SolarCell':{
			name:"bld_Solar Cell",
			button:null,//what this line do?
			maximum: 10,
			electricitySpeed: 5,
			buildMsg:'a new solar cell is installed.',
			hint:'generate electricity',
			maxMsg:'no room for new solar cell',
			type:'building',
			cost: function(){
				// var n =1; //TODO change n = (get the number of exist solar cell)
				var n = localStorage.getItem("bld_Solar Cell");
				return {
					'power': 10 + (n*10)
				};
			}
		},
		'bld_ChargingPost': {
			name:'bld_Charging Post',
			button:null,//what this line do?
			maximum: 10,
			//support robot
			supportWorker: 5,
			supportFight: 2,
			hint:'A charging Post can supply two fighting robot and five worker robot',
			buildMsg:'a new charging post is settled, it can supply two fighting robot and five worker robot',
			maxMsg:'electricity supply is not enough for more charging post.',
			type:'building',
			cost: function(){
				var n = localStorage.getItem("bld_Charging Post");
				return {
					'power': 50 + (n*50),
					'metal': 10 + (n*5),
				};
			}			
		},

		'bld_Workshop': {
			name:'bld_Workshop',
			button:null,//what this line do?
			maximum: 10,
			//support robot
			supportWorker: 5,
			supportFight: 2,
			hint:'You can build your accessories in Workshop',
			buildMsg:'a new Workshop is settled',
			maxMsg:'electricity supply is not enough for more charging post.',
			type:'building',
			cost: function(){
				var n = localStorage.getItem("bld_Charging Post");
				return {
					'power': 50 + (n*50),
					'metal': 10 + (n*5),
				};
			}			
		},

		'bld_WorkerRobotFactory': {
			name:'bld_Worker Robot Factory',
			button:null,//what this line do?
			unlock:"lok_Worker Robot",
			maximum: 1,
			hint:'You can build Worker Robot in this factory',
			buildMsg:'You can build worker in factory.',
			maxMsg:'You can only have one factory',
			type:'building',
			cost: function(){
				var n = localStorage.getItem("bld_Worker Robot Factory");
				return {
					'power': 50 + (n*50),
					'metal': 10 + (n*5),
				};
			}			
		},

		'bld_AttackerRobotFactory': {
			name:'bld_Attacker Robot Factory',
			button:null,//what this line do?
			unlock: "lok_Attacker Robot",
			hint:'You can build Attacker Robot in this factory',
			maximum: 1,
			buildMsg:'You can build Attacker Robot in factory.',
			maxMsg:'You can only have one Attacker Robot factory',
			type:'building',
			cost: function(){
				var n = localStorage.getItem("bld_Attacker Robot Factory");
				return {
					'power': 50 + (n*50),
					'metal': 10 + (n*5),
				};
			}			
		},

		'bld_DefenserRobotFactory': {
			name:'bld_Defenser Robot Factory',
			button:null,//what this line do?
			unlock: "lok_Defenser Robot",
			hint:'You can build Defenser Robot in this factory',
			maximum: 1,
			buildMsg:'You can build Defenser Robot  in factory.',
			maxMsg:'You can only have one Defenser Robot factory',
			type:'building',
			cost: function(){
				var n = localStorage.getItem("bld_Defenser Robot Factory");
				return {
					'power': 50 + (n*50),
					'metal': 10 + (n*5),
				};
			}			
		},

		'bld_GatherRobotFactory': {
			name:'bld_Gather Robot Factory',
			button:null,//what this line do?
			unlock: "lok_Gather Robot",
			hint:'You can build Gather Robot in this factory',
			maximum: 1,
			buildMsg:'You can build Gather Robot in factory.',
			maxMsg:'You can only have one Gather Robot factory',
			type:'building',
			cost: function(){
				var n = localStorage.getItem("bld_Gather Robot Factory");
				return {
					'power': 50 + (n*50),
					'metal': 10 + (n*5),
				};
			}			
		},

		'bld_HealerRobotFactory': {
			name:'bld_Healer Robot Factory',
			button:null,//what this line do?
			unlock: "lok_Healer Robot",
			hint:'You can build Healer Robot in this factory',
			maximum: 1,
			buildMsg:'You can build Healer Robot in factory.',
			maxMsg:'You can only have one Healer Robot factory',
			type:'building',
			cost: function(){
				var n = localStorage.getItem("bld_Healer Robot Factory");
				return {
					'power': 50 + (n*50),
					'metal': 10 + (n*5),
				};
			}			
		},


		'bld_ScrapHeap': {
			name:'bld_Scrap Heap',
			button:null,//what this line do?
			maximum: 1,
			hint:'You can find scrap here.',
			buildMsg:'A Scrap Heap is settled',
			maxMsg:'electricity supply is not enough for more charging post.',
			type:'building',
			cost: function(){
				var n = localStorage.getItem("bld_Scrap Heap");
				return {
					'power': 50 + (n*50),
					'metal': 10 + (n*5),
				};
			}			
		},
	}//end of craftables
}

   //  	 model.setData("bld_Solar Cell",0);
		 // model.setData("bld_Scrap Heap",0);
   //       model.setData("bld_Factory",0);
   //       model.setData("bld_Charging Post",0);