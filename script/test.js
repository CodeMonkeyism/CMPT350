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
		//test case example 1
		if (command=="show me the money") {
			console.log("gas and money+10000");
			$("#testMode").empty()
			.append("<p>Rich Test is On!</p>");
		//test case example 2	
		}else if (command=="black sheep wall") {
			console.log("no fog of war!");
			$("#testMode").empty()
			.append("<p>clear vision Test is On!</p>");
		};
	}