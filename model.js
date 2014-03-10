// model for the game
var model = {

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
	}

};

// var storage = window.localStorage;
// function showStorage(){
// for(var i=0;i<storage.length;i++){ //key(i)获得相应的键，再用getItem()方法获得对应的值
// document.write(storage.key(i)+ ” : ” + storage.getItem(storage.key(i)) + “<br>”);
// }
// }

//test case for model

var testModel= Object.create(model);

testModel.setData("wood",10);
console.log(testModel.getData("wood")+"should 10");

testModel.add("wood",2);
console.log(testModel.getData("wood")+"should 12");

testModel.minus("wood",1);
console.log(testModel.getData("wood")+"should 11");

testModel.multiply("wood",2);
console.log(testModel.getData("wood")+"should 22");

testModel.divide("wood",11);
console.log(testModel.getData("wood")+"should 2");

testModel.addNewItem("iron",5);
console.log(testModel.getData("iron")+"should 5");

testModel.removeItem("iron");
console.log(testModel.getData("iron")+"should null");

console.log(testModel.getAllItem());
// localStorage.setItem("students",students);//用localStorage保存转化好的的字符串

// localStorage.setItem("test1","20")

// console.log(localStorage.getItem("test1"));

// localStorage.setItem("test1","21")

// console.log(localStorage.getItem("test1"));