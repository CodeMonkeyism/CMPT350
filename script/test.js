$(function(){
	$("div#menuArea").empty()
	.append('<input type="text" id="testInput"/>')
	.append('<button id="testButton" >Start Test</button>')
	.append('<div id="testMode"></div>');
	$("#testButton").attr("onclick","chooseTest()");
});

	function chooseTest(){
		var command = $('#testInput').val();
		if (command=="show me your money") {
			console.log("gas and money+10000");
			$("#testMode").append("<p>Rich Test is On!</p>");
	
		}else if (command=="black sheep wall") {
			console.log("no fog of war!");
			$("#testMode").append("<p>clear vision Test is On!</p>");
		};
	}