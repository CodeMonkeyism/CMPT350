/**
* show the worker page, and organize how robot workers distribute. 
*/
var Workers = {
	name: "worker",
	_Delay: 10,
	_Duty: {
		'Idle':{
			'power':0
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
			'frame':2,
			'gear':1
		},
		'Pumper':{
			'power':-1,
			'lube':1
		},



	},
	_WorkerCount: {
		'Idle':0,
		'Scavenger':0,
		'Foundryman':0,
		'Bender':0,
		'Pumper':0,

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
	},
	'refreshWorkerData':function(){
		$("div#workerList").empty();
		$.each(Workers._Duty, function(key,value){
			var job = "wkr_"+key;
		//build worker row
			var workerRow = $('<div>')
			.attr("class","RowRoot")
			.attr("id",key+"Row")
			.appendTo($("#workerList"));
		//append job name to workerRow
			$('<div>')
			.attr("class","RowLeft")
			.attr("id",key+"Name")
			.text(key)
			.appendTo($(workerRow));
		//append worker value container to workerRow
			var workerRight = $('<div>')
			.attr("class","RowRight")
			.attr("id",key+"Name")
			.appendTo($(workerRow));
		//append button and number to workerRow
			//left button
			var minButton = $("<button>")
			.text("<")
			.attr("class","leftBtn")
			.click(function(){
				if (model.getData(job)>0) {
				model.minus(job,1);
				model.add('wkr_Idle',1);
				Workers.refreshWorkerData();						
				};
			})
			.appendTo($(workerRight));
			//number
			$("<span>")
			.attr("class","Val")
			.text(model.getData(job))
			.appendTo($(workerRight));
			//right button
			var maxButton = $("<button>")
			.text(">")
			.attr("class","rightBtn")
			.click(function(){
				if (model.getData('wkr_Idle')>0) {
				model.add(job,1);
				model.minus('wkr_Idle',1);	
				Workers.refreshWorkerData();					
				};
			})
			//if it is idle, hide the button.
			.appendTo($(workerRight));
			if (key=='Idle') {
				$(minButton).css('visibility','hidden');
				$(maxButton).css('visibility','hidden');
			};
		//add cost tooltip
			var costTooltip = $('<div>').addClass("tooltip bottom right");
			for(var k in value) {
				$("<div>").addClass('row_key').text(k).appendTo(costTooltip);
				$("<div>").addClass('row_val').text(value[k]).appendTo(costTooltip);
			}
			if(costTooltip.children().length > 0) {
				costTooltip.appendTo(workerRow);
			}
		});
	},

}