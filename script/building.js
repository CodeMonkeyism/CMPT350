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
				var buttonId = name+"Button";
				var newButton = new Button.Button({
					id: buttonId,
					text: mainRoom._buildings[buildName].name.substring(4),
					click: this.buttonOnClick(buildName),
					cost: mainRoom._buildings[buildName].cost(),
				});
				if($("#"+buttonId).length>0){
					$("#"+buttonId).replaceWith(newButton);
				}
				else{
					newButton.appendTo('div#BuildingList');
				}
		},

		buttonOnClick:function(buildName){
			model.add(mainRoom._buildings[buildName].name,1);
			showResource.refreshBuild();

			//check unlock
			if(mainRoom._buildings[buildName].unlock.length>0){
				model.setData(mainRoom._buildings[buildName].unlock="True")
			}
		},

	};