// model for the game
<script type="text/javascript" <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
var model = {

	test: function(){ console.log("test"); }

};

var testClass = Object.create(model);


$.getJSON("data.json", function(json){

	testClass.test();
	resultArrary = json.items;
	console.log(resultArrary[0].name);

	});