var mainRoom = {
	name: 'mainRoom',

	_Craftables: {
		'solar cell':{
			button:null,//what this line do?
			maximum: 20,
			buildMsg:'a new solar cell is installed.',
			maxMsg:'no room for new solar cell',
			type:'building',
			cost: function(){
				var n =1; //TODO change n = (get the number of exist solar cell)
				return {
					'power': 10 + (n*10)
				};
			}
		},
		'charging post': {
			button:null,//what this line do?
			maximum: 40,
			buildMsg:'a new charging post is settled, it can supply two fighting robot.',
			maxMsg:'electricity supply is not enough for more charging post.',
			type:'building',
			cost: function(){
				var n =1; //TODO change n = (get the number of exist charging post)
				return {
					'power': 50 + (n*50),
					'metal': 10 + (n*5),
				};
			}			
		},

	}//end of craftables
}