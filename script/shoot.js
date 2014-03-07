$(document).ready(function(){
	$("#fightArea").append("<button id=\"startFight\">READY!</button>");

	$("#startFight").click(function(){
		$("#fightArea").empty();
		$("#fightArea").append("<button id=\"startShoot\">SHOOT!</button>");
		
		var randomTime = Math.random()*10000+2000;
		$("#messageArea").empty(); 
		$("#messageArea").append("<b>HOLD...</b>");

		setTimeout(function (){
		 	$("#messageArea").empty();
		 	$("#messageArea").append("<b>HOLD STEADY...</b>");
		}, 2000);
		
		setTimeout(function (){
		 	$("#messageArea").empty();
		 	$("#messageArea").append("<b>FIRE!</b>");
		}, randomTime); 
		//$("#messageArea").append("<b>"+randomTime+"</b>.");
		// console.log("what?");


	});
});

