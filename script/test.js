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
			d = document.createElement("div");
			$(d).attr("id","headButtonArea")
				.appendTo($("div#header"));
			var list = ["room","WorkShop","Outside"];
			list.forEach(function(name){
				var b = document.createElement("button");
				$(b).html(name).attr("id",name+"Button").appendTo($("div#headButtonArea"));	
			});
			$("#WorkShopButton").click(function(){
				$(this).hide();
			});
			$("#OutsideButton").click(function(){
				$("#WorkShopButton").show();
			})
		}else if (command=="addsolar") {
			console.log("add a solar cell")
			model.add("bld_Solar Cell",1);
			engine.calcResSpeed();
			showResource.refreshBuild();
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> origin/master
>>>>>>> origin/Xingze1
		};

	}