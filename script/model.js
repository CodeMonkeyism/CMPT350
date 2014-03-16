// model for the game
var model = {

	timerRuntime : "0",

	// test: function(){ console.log("test"); }
	add:function(name,parameter){
		var data = this.getData(name);
		data = parseInt(data) + parseInt(parameter);
		this.setData(name,data);

	},

	minus:function(name,parameter){
		var data = this.getData(name);
		data = parseInt(data) - parseInt(parameter);
		this.setData(name,data);
	},

	multiply:function(name,parameter){
		var data = this.getData(name);
		data = parseInt(data) * parseInt(parameter);
		this.setData(name,data);
	},

	divide:function(name,parameter){
		var data = this.getData(name);
		data = parseInt(data) / parseInt(parameter);
		this.setData(name,data);
	},

	getData:function(name){
		return localStorage.getItem(name);
	},

	setData:function(name,parameter){
		localStorage.setItem(name,parameter);
	},

	addNewItem:function(name,parameter){
		localStorage.setItem(name,parameter);
	},

	removeItem:function(name){
		localStorage.removeItem(name);
	},

	getAllItem:function(){
		var allItem =new Array()
		for(var i=0;i<localStorage.length;i++){
			allItem[i] = localStorage.key(i);
		}
		return allItem;
	},

	/**
	@param action add/minus/multiply/divide
	@param name name of items
	@param parameter parameter of add/minus/multiply/divide method
	@param delay the gap of two actions
	@param times the length of loop time
	*/
	setTimer:function(action,name,parameter,delay,period){
		var i=0;
		if(action == "add"){
			var id=setInterval(function(){
				model.add(name,parameter);
				console.log(model.getData(name));
			},delay);
		}

		if(action == "minus"){
			var id=setInterval(function(){
				model.minus(name,parameter);
				console.log(model.getData(name));
			},delay);
		}

		if(action == "multiply"){
			var id=setInterval(function(){
				model.multiply(name,parameter);
				console.log(model.getData(name));
			},delay);
		}

		if(action == "divide"){
			var id=setInterval(function(){
				model.divide(name,parameter);
				console.log(model.getData(name));
			},delay);
		}

		//cancel timer
		setTimeout(function(){
			clearInterval(id);	
		},period);

	},
};


//test case for model

// var testModel= Object.create(model);

// testModel.setData("wood",10);
// console.log(testModel.getData("wood")+"should 10");

// testModel.add("wood",2);
// console.log(testModel.getData("wood")+"should 12");

// testModel.minus("wood",1);
// console.log(testModel.getData("wood")+"should 11");

// testModel.multiply("wood",2);
// console.log(testModel.getData("wood")+"should 22");

// testModel.divide("wood",11);
// console.log(testModel.getData("wood")+"should 2");

// testModel.addNewItem("iron",5);
// console.log(testModel.getData("iron")+"should 5");

// testModel.removeItem("iron");
// console.log(testModel.getData("iron")+"should null");

// console.log(testModel.getAllItem());

// testModel.setTimer("add","wood",1,100,1000);

// localStorage.setItem("students",students);//用localStorage保存转化好的的字符串

// localStorage.setItem("test1","20")

// console.log(localStorage.getItem("test1"));

// localStorage.setItem("test1","21")

// console.log(localStorage.getItem("test1"));