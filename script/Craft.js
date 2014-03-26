var mainRoom = {
	name: 'mainRoom',

	_Craftables: {
		'bld_Solar Cell':{
			button:null,//what this line do?
			maximum: 10,
			buildMsg:'a new solar cell is installed.',
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
		'bld_Charging Post': {
			button:null,//what this line do?
			maximum: 10,

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

		'bld_Factory': {
			button:null,//what this line do?
			maximum: 1,
			buildMsg:'You can build robot and equipment in factory.',
			maxMsg:'electricity supply is not enough for more charging post.',
			type:'building',
			cost: function(){
				var n = localStorage.getItem("bld_Factory");
				return {
					'power': 50 + (n*50),
					'metal': 10 + (n*5),
				};
			}			
		},


		'bld_Scrap Heap': {
			button:null,//what this line do?
			maximum: 1,
			buildMsg:'You can find scrap here.',
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
	}//end of craftables
}

   //  	 model.setData("bld_Solar Cell",0);
		 // model.setData("bld_Scrap Heap",0);
   //       model.setData("bld_Factory",0);
   //       model.setData("bld_Charging Post",0);