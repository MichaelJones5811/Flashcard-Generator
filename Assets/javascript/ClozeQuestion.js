var file2 = require("./file2.JSON");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
var fs = require()
var clozeQuestion = function(){
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
		
		file2.clozeCardArray.push(new ClozeCard(answers.question,answers.answer));
		for(var i = 0; i < file2.clozeCardArray.length; i++){
			console.log(file2.clozeCardArray[i]);
		 }
		clozeQuestion();
		

	});

 }
 //clozeQuestion();
module.exports = clozeQuestion;