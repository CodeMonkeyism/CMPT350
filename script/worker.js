/**
* show the worker page, and organize how robot workers distribute. 
*/
var Workers = {
	name: "worker",
	_Delay: 10,
	_Duty: {
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
		},
		'Miner':{
			'power':-1,
			'silicon':1
		},
		'Fitter':{
			'power':-10,
			'silicon':-5,
			'chip':1
		},


	},
	_WorkerCount: {
		'Cellman':0,
		'Scavenger':0,
		'Foundryman':0,
		'Bender':0,
		'Miner':0,
		'Fitter':0,
	},
	Product: {
		'power': function(){
			var product = Workers._Duty.Cellman.power * Workers._WorkerCount.Cellman;
			return parseInt(product);
		},
		'scrap': function(){
			var powerEnough = Workers.isResourceEnough('power', Workers._Duty.Scavenger.power);
			var product = Workers._Duty.Scavenger.scrap * Workers._WorkerCount.Scavenger;
			return parseInt(powerEnough * product);
		},
		'frame': function(){
			var metalEnough = Workers.isResourceEnough('metal', Workers._Duty.Bender.metal);
			var powerEnough = Workers.isResourceEnough('power', Workers._Duty.Bender.power);
			var product = Workers._Duty.Bender.frame * Workers._WorkerCount.Bender;
			return parseInt(metalEnough * powerEnough * product);
		},
		'silicon': function(){
			var powerEnough = Workers.isResourceEnough('power', Workers._Duty.Miner.power);
			var product = Workers._Duty.Miner.silicon * Workers._WorkerCount.Miner;
			return parseInt(powerEnough * product);
		},
		'chip': function(){
			var powerEnough = Workers.isResourceEnough('power', Workers._Duty.Fitter.power);
			var siliconEnough = Workers.isResourceEnough('silicon', Workers._Duty.Fitter.silicon);
			var product = Workers._Duty.Fitter.chip * Workers._WorkerCount.Fitter;
			return parseInt(siliconEnough * powerEnough * product);
		}

	},
	// Check whether resource is enough. If so, 1 will be returned.
	'isResourceEnough': function(resourceName, value){
		var currentResource = parseInt(model.getData(resourceName));
		// -1 * value is resource required, since required resource is written in negative.
		if (currentResource == NaN || currentResource < -1 * value) {
			return 0;
		} 
		else{
			return 1;
		};
	}

}