$(function(){
	$("div#menuArea").empty()
	.append('<input type="text" id="testInput"/>')
	.append('<button id="testButton" >Start Test</button>')
	.append('<div id="testMode"></div>');
	$("#testButton").attr("onclick","chooseTest()");

	$('#testInput').bind("enterKey",function(e){
	   $("#testButton").click();
	});
	$('#testInput').keyup(function(e){
	    if(e.keyCode == 13)
	    {
	        $(this).trigger("enterKey");
	    }
	});
});

	function chooseTest(){
		var command = $('#testInput').val();
		
		if (command=="show me the money") {//test case example 1
			console.log("gas and money+10000");
			model.add('res_Power',1000000);
			model.add('res_Metal',1000000);
			model.add('res_Scrap',1000000);
			model.add('res_Lube',1000000);
			$("#testMode").empty()
			.append("<p>Rich Test Mode is On!</p>");
		}else if (command=="black sheep wall") {//test case example 2

			console.log("no fog of war!");
			$("#testMode").empty()
			.append("<p>clear vision Test is On!</p>");

		}else if (command=="teo") {//trigger event frame
			$("div#event").hide();
		}else if (command=="tec") {
			$("div#event").show();

		}else if (command=="addsolar") {
			console.log("add a solar cell")
			model.add("bld_Solar Cell",1);
			engine.calcResSpeed();
			showResource.refreshBuild();

		}else if (command=="re") {//trigger event.
			var eventName = randomEventType[Math.floor(Math.random() * randomEventType.length)];

			var theEvent = Events.createRandomEvent(eventName);

			var theScene = 'start';
			Events.loadEvent(theEvent,theScene);

		} else if(command=="set worker"){
			$.each(Workers._Duty, function(key,value){
				var job = "wkr_"+key;
				model.setData(job,15);
			});
		} else if(command=="testbutton"){
			building.pushBuilding("bld_Solar Cell");


		}else if(command=="name"){
			robotFactory.initButton();
		}else if(command=="rich"){
			model.add('res_Power',1000000);
			model.add('res_Metal',1000000);
			model.add('res_Scrap',1000000);
			model.add('res_Lube',1000000);

		}else if(command=="scrap"){
			// unlock.unlockBuilding("bld_ScrapHeap");
			model.setData("lok_bld_Scrap Heap","true");
			unlock.refreshUnlock();
		}else if(command=="cloud"){
			var theEvent = Events.createRandomEvent("cloud");
			console.log(theEvent);
			var theScene = 'start';
			Events.loadEvent(theEvent,theScene);
		}else if(command=='workers'){
			Workers.WorkerCome();
		}else if(command=="iflock"){
			unlock.ifLocked("bld_Scrap Heap");
		};

	}


