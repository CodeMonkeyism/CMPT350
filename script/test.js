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
			$("#testMode").empty()
			.append("<p>Rich Test is On!</p>");
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
			var theEvent = Events.createRandomEvent("room");	
			var theScene = 'start';
			Events.loadEvent(theEvent,theScene);

		} else if(command=="set worker"){
			$.each(Workers._Duty, function(key,value){
				var job = "wkr_"+key;
				model.setData(job,15);
			});
		}  else if(command=="add attacker"){
			var robot ={
            	robotName : "rob_" + engine.getGuid(),
            	attackPower : 10,
            	defensePower : 8,
            	HP: 7,
            	luck: 5,
            	robotType: robotFactory.ATTACKER
        	};
			robotFactory.idleList.push(robot);
			console.log(robotFactory.idleList);
			robotFactory.refreshRobotList();
			Events.initExplorePanel();


		} else if(command=="add defenser"){
			var robot ={
            	robotName : "rob_" + engine.getGuid(),
            	attackPower : 8,
            	defensePower : 10,
            	HP: 8,
            	luck: 5,
            	robotType: robotFactory.DEFENSER
        	};
			robotFactory.idleList.push(robot);


		} else if(command=="add gather"){
			var robot ={
            	robotName : "rob_" + engine.getGuid(),
            	attackPower : 5,
            	defensePower : 5,
            	HP: 8,
            	luck: 10,
            	robotType: robotFactory.GATHER
        	};
			robotFactory.idleList.push(robot);


		} else if(command=="add healer"){
			var robot ={
            	robotName : "rob_" + engine.getGuid(),
            	attackPower : 5,
            	defensePower : 7,
            	HP: 8,
            	luck: 10,
            	robotType: robotFactory.HEALER
        	};
			robotFactory.idleList.push(robot);


		}else if(command=="testbutton"){
			building.pushBuilding("bld_SolarCell");


		};

	}


