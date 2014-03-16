/**
*@author Xingze Guo
*push message to resource and building
*/


var showResource = {


	// addNew:function(newMessage){

	// 	$("#messageArea").prepend("<p>"+newMessage+"</p>");
	// 	console.log("new is  "+ newMessage);

	// },

	//get an two dimension array with all resourse's name and data
	getAllResName:function(){
		var allRes =new Array()
		var j = 0;
		for(var i=0;i<localStorage.length;i++){
			// console.log(localStorage.key(i));
			// console.log(localStorage.key(i).substring(0,4));
			if(localStorage.key(i).substring(0,4)=="res_"){
				var resName = localStorage.key(i);
				var resValue = model.getData(resName);
				console.log(resName+"name");
				console.log(resValue+"value");
				allRes[j] = [resName,resValue];
				console.log(allRes[j]+"array");
				j++;
			}
		}
		return allRes;
	},

	refreshRes:function(){
		var getRes = this.getAllResName();
		console.log(getRes);
		$("#sourceArea").empty();
		for(var i=0;i<getRes.length;i++){
			//getRes[i][0] is name, getRes[i][0] is value
			
			$("#sourceArea").append("<div class=RowRoot>");
			$("#sourceArea").append("<div class=RowLeft>" + getRes[i][0].substring(4) + "</div>");
			$("#sourceArea").append("<div class=RowRight>" + getRes[i][1] + "</div>");
			$("#sourceArea").append("</div>");
		}
// RowRool
	}

	// getAllResData:function(){
	// 	var allResData = new Array();
	// 	var resName = this.getAllResName();

	// }
}

var testShow= Object.create(showResource);
console.log(testShow.getAllResName()+"result");

 $( document ).ready(function() {
    testShow.refreshRes();

  });

// var testPushMessage= Object.create(pushMessage);


