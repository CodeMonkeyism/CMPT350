/**
* show the worker page, and organize how robot workers distribute. 
*/
var Workers = {
	name: "worker"
	_Delay: 10,
	_Duty = {
		'Cellman':{
			'power':1
		},
		'Scavenger':{
			'power':-1,
			'scrap':1
		},
		'Foundryman':{
			'power':-1,
			'scrap':-4,
			'metal':2,
		},
		'Bender':{
			'power':-1,
			'metal':-5,
			'frame':2
		}
		'Miner':{
			'power':-1,
			'silicon':1
		}
		'Fitter':{
			'power':-10,
			'silicon':-5,
			'chip':1
		}


	}
}