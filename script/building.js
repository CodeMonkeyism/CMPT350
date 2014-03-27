				// new Button.Button({
				// 	id: 'gatherButton',
				// 	text: "gather wood",
				// 	click: 0,
				// 	cooldown: 10,
				// }).appendTo('div#buildingButton');

	var building = {

		//push building button to ui
		pushBuilding:function(buildName){
			// $.each(mainRoom._buildings, function(key,value){
			// mainRoom._buildings[name].cost();
				// new Button.Button({
				// 	id: name+"Button",
				// 	text: name.substring(4),
				// 	click: 0,
				// 	cost: mainRoom._buildings[name].cost(),
				// }).appendTo('div#BuildingList');
				// console.log(mainRoom._buildings[buildName]);
				var buttonId = mainRoom._buildings[buildName].buttonID;
				var buildingCost = mainRoom._buildings[buildName].cost();
				var newButton = new Button.Button({
					id: buttonId,
					text: buildName.substring(4),
					// click: this.buttonOnClick(buildName),
					click:function() {
								console.log(building.checkRes(buildingCost));
								if(building.checkRes(buildingCost)){
									//if have enough res
									if(model.getData(buildName)<mainRoom._buildings[buildName].maximum){
										model.add(buildName,1);
										showResource.refreshBuild();
										engine.calcResSpeed();
										Message.pushMessage(mainRoom._buildings[buildName].buildMsg);

										//reduce res
										$.each(buildingCost,function(key,value){
											model.minus(key,value);
										});

										//	check unlock
										if(mainRoom._buildings[buildName].unlock[0]!="null"){
											$.each(mainRoom._buildings[buildName].unlock,function(key,value){
												model.setData(value,"true")
												// console.log(value);
											});
										}
										unlock.refreshUnlock();
									}
									else{
										Message.pushMessage(mainRoom._buildings[buildName].maxMsg);
									}
								} else{
									 	Message.pushMessage("You don't have enough resource");
									}

								// $("#"+buttonId).replaceWith(newButton);
							},
					cost: buildingCost,
				});

				if($("#"+buttonId).length>0){
					$("#"+buttonId).replaceWith(newButton);
				}
				else{
					newButton.appendTo('div#BuildingList');
				}
		},

		//push all button to gui
		pushAllBuilButton:function(){
			$.each(mainRoom._buildings, function(key,value){
				building.pushBuilding(key);
				$("#"+value.buttonID).hide();
				// console.log("key"+key);
				// console.log("value"+value);
			});
			// $("#bld_SolarCell").hide();
			unlock.unlockBuilding("bld_SolarCell");
			},


	  //check if have enough res
	  checkRes:function(bulCost){
	  	var isEnough = true;
	  	$.each(bulCost,function(key,value){
	  		// model.getData(key)
	  		// console.log(value+"~!@#!@~");
	  		if(model.getData(key)<value){
	  			// console.log("test~!@#");
	  			isEnough = false;
	  		}
	  	});
	  		return isEnough;
	  },

	};