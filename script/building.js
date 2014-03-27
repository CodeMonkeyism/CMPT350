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
				var buttonId = mainRoom._buildings[buildName].buttonID
				var newButton = new Button.Button({
					id: buttonId,
					text: buildName.substring(4),
					// click: this.buttonOnClick(buildName),
					click:function() {
								if(model.getData(buildName)<mainRoom._buildings[buildName].maximum){
									model.add(buildName,1);
									showResource.refreshBuild();
									engine.calcResSpeed();
									Message.pushMessage(mainRoom._buildings[buildName].buildMsg);
								}
								else
									Message.pushMessage(mainRoom._buildings[buildName].maxMsg);
								// $("#"+buttonId).replaceWith(newButton);
							},
					cost: mainRoom._buildings[buildName].cost(),
				});

				if($("#"+buttonId).length>0){
					$("#"+buttonId).replaceWith(newButton);
				}
				else{
					newButton.appendTo('div#BuildingList');
				}
		// },

		// buttonOnClick:function(buildName){
		// 	model.add(mainRoom._buildings[buildName].name,1);
		// 	showResource.refreshBuild();

		//	check unlock
			if(mainRoom._buildings[buildName].unlock!="null"){
				model.setData(mainRoom._buildings[buildName].unlock="True")
				console.log(mainRoom._buildings[buildName].unlock+"~~~~~~~~");
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
			}



	};