var inquirer = require("inquirer");
var basicCardArray = [];
var BasicCard = require("./BasicCard.js");
var File = require("./file.js");

var basicQuestion = function(){
	inquirer.prompt([
	{
		type: "input",
		name: "question",
		message: "What question who you like to ask? "
	},
	{
		type: "input",
		name: "answer",
		message: "What is the answer "
	},
	{
		type: "confirm",
		name: "quit",
		message: "Who you like to add more questions ",
		default: false
	}

	]).then(function(answers){
		
		basicCardArray.push(new BasicCard(answers.question,answers.answer));
		for(var i = 0; i < basicCardArray.length; i++){
			console.log(basicCardArray[i]);
		 }
		basicQuestion();
		

	});

 }
module.exports = basicQuestion;