/**
*@author Xingze Guo
*push message to resource and building
*/

var showResource = {


	//get an two dimension array with all resourse's name and data
	getAllRes:function(){
		var allRes =new Array()
		var j = 0;
		for(var i=0;i<localStorage.length;i++){
			// console.log(localStorage.key(i));
			// console.log(localStorage.key(i).substring(0,4));
			if(localStorage.key(i).substring(0,4)=="res_"){
				var resName = localStorage.key(i);
				var resValue = model.getData(resName);
				// console.log(resName+"name");
				// console.log(resValue+"value");
				allRes[j] = [resName,resValue];
				// console.log(allRes[j]+"array");
				j++;
			}
		}
		return allRes;
	},

	refreshRes:function(){
		var getRes = this.getAllRes();
		// console.log(getRes);
		$("#sourceArea").empty();
		for(var i=0;i<getRes.length;i++){
			//getRes[i][0] is name, getRes[i][0] is value
			var speed = 0;
			if(getRes[i][0]=="res_Power"){
				if(engine.powerSpeed>0)
					speed = "+" + engine.powerSpeed;
				else
					speed = engine.powerSpeed;

			}else if(getRes[i][0]=="res_Scrap"){
				if(engine.scrapSpeed>0)
					speed = "+" + engine.scrapSpeed;
				else
					speed = engine.scrapSpeed;
			}else if(getRes[i][0]=="res_Lube"){
				if(engine.lubeSpeed>0)
					speed = "+" + engine.lubeSpeed;
				else
					speed = engine.lubeSpeed;
			}else if(getRes[i][0]=="res_Metal"){
				if(engine.metalSpeed>0)
					speed = "+" + engine.metalSpeed;
				else
					speed = engine.lubeSpeed;
			}else if(getRes[i][0]=="res_Frame"){
				if(engine.frameSpeed>0)
					speed = "+" + engine.frameSpeed;
				else
					speed = engine.lubeSpeed;
			}else if(getRes[i][0]=="res_Gear"){
				if(engine.gearSpeed>0)
					speed = "+" + engine.gearSpeed;
				else
					speed = engine.lubeSpeed;
			}
			

			$('<div>').attr("class","RowRoot").appendTo($("div#sourceArea"))
			 .append("<div class='RowLeft'>" + getRes[i][0].substring(4) + "</div>")
			 .append("<div class='RowRight'>" + getRes[i][1] + "</div>")
			 .append("<div class='RowMiddle'>" + speed + "</div>")
			 .append("<div class='tooltip'>" + "test" + "</div>")
			// $("#sourceArea").append("<div class='RowLeft'>" + getRes[i][0].substring(4) + "</div>");
			// $("#sourceArea").append("<div class='RowRight'>" + getRes[i][1] + "</div>");
			// $("#sourceArea").append("</div>");
		}

		//if grow speed>0 set green, otherwise set red;
		$(".RowMiddle").each(function(){
			// console.log($(this).text()+"~~~~~~~~~~~~~~~~");
			if($(this).text()>0)
				$(this).css("color","#00FF00");
			else 
				$(this).css("color","#FF0000");
		});
	},

	getAllBulid:function(){
		var allBulid =new Array()
		var j = 0;
		for(var i=0;i<localStorage.length;i++){
			// console.log(localStorage.key(i));
			// console.log(localStorage.key(i).substring(0,4));
			if(localStorage.key(i).substring(0,4)=="bld_"){
				var bulidName = localStorage.key(i);
				var bulidValue = model.getData(bulidName);
				// console.log(bulidName+"name");
				// console.log(bulidValue+"value");
				allBulid[j] = [bulidName,bulidValue];
				// console.log(allBulid[j]+"array");
				j++;
			}
		}
		return allBulid;
	},

	refreshBuild:function(){
		var getBulid = this.getAllBulid();
		console.log(getBulid);
		$("#buildingArea").empty();
		for(var i=0;i<getBulid.length;i++){
			//getBulid[i][0] is name, getBulid[i][0] is value

			$("#buildingArea").append("<div class=RowRoot>");
			$("#buildingArea").append("<div class=RowLeft>" + getBulid[i][0].substring(4) + "</div>");
			$("#buildingArea").append("<div class=RowRight>" + getBulid[i][1] + "</div>");
			$("#buildingArea").append("</div>");
		}
	}
}




// var testShow= Object.create(showResource);
// console.log(testShow.getAllRes()+"result");

 // $( document ).ready(function() {
 //    testShow.refreshRes();
 //    testShow.refreshBuild();

 //  });

// var testPushMessage= Object.create(pushMessage);