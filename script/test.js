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

		}else if (command=="teo") {//trigger event
			$("div#event").hide();
		}else if (command=="tec") {
			$("div#event").show();

		}else if (command=="addsolar") {
			console.log("add a solar cell")
			model.add("bld_Solar Cell",1);
			engine.calcResSpeed();
			showResource.refreshBuild();

		}else if (command=="worker") {
			//put this block to init GUI
			$("#WorkShopPanel").append(
				$("<div>").attr("id","workerListContainer").append(
					$("<div>").attr("id","workerList").attr("class","Area")
				)
			);
			//put this block as function
			//get number of worker from localstorage. 
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
				var minButton = $("<button>")
				.text("<")
				.click(function(){
					if (model.getData(job)>0) {
					model.minus(job,1);
					model.add('wkr_Idle',1);						
					};
					console.log("this is "+model.getData(job));
					console.log("idle is "+model.getData('wkr_Idle'));
				})
				.appendTo($(workerRight));
				$("<span>")
				.text(model.getData(job))
				.appendTo($(workerRight));
				var maxButton = $("<button>")
				.text(">")
				.click(function(){
					if (model.getData('wkr_Idle')>0) {
					model.add(job,1);
					model.minus('wkr_Idle',1);						
					};
				})
				.appendTo($(workerRight));
				if (key=='Idle') {
					$(minButton).css('visibility','hidden');
					$(maxButton).css('visibility','hidden');
				};
			});
		} else if(command=="set worker"){
				$.each(Workers._Duty, function(key,value){
					var job = "wkr_"+key;
					model.setData(job,15);
				});
		};

	}