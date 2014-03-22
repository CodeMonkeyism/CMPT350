/**
*@author Xingze Guo
*model for resourses
*/

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
};


//test case for model

var testModel= Object.create(model);

// testModel.setData("res_Power",0);
// testModel.setData("res_Scrap",0);
// testModel.setData("res_Lube",0);


// console.log(testModel.getData("res_wood")+"should 22");

// console.log(testModel.getData("res_wood")+"should 2");

// testModel.addNewItem("res_iron",5);
// testModel.addNewItem("bld_Power Station",6);
// testModel.addNewItem("bld_Sunwell ",13);
// testModel.addNewItem("bld_Robot Factory ",25);
// console.log(testModel.getData("res_iron")+"should 5");
// 
// testModel.removeItem("res_iron");
// console.log(testModel.getData("res_iron")+"should null");

// console.log(testModel.getAllItem());

// testModel.setTimer("add","res_wood",1,100,1000);

// localStorage.setItem("students",students);//用localStorage保存转化好的的字符串

// localStorage.setItem("test1","20")

// console.log(localStorage.getItem("test1"));

// localStorage.setItem("test1","21")

// console.log(localStorage.getItem("test1"));