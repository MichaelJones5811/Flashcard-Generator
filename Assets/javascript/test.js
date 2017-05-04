//var file = require("./file.json");
var file = require("./file.js");

function test(){
	console.log(file.basicCardArray[0]);

}

test();
// this is my data object
var dataObject = {
					"basicCardArray":
					["test1","test2"],
					"clozeCardArray":[]

				};

module.exports = dataObject;

//Here is my driver
//var file = require("./file.json"); doesn't work
var file = require("./file.js");

function test(){
	console.log(file.basicCardArray[0]);

}

test();