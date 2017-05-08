var inquirer = require("inquirer");

var BasicCard = require("./BasicCard.js");
var file2 = require("./file2.JSON");
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
		default: true
	}

	]).then(function(answers){
		
		
	
		if(answers.quit){
			file2.basicCardArray.push(new BasicCard(answers.question,answers.answer));
			basicQuestion();
		}
		else{
		
			for(var i = 0; i < file2.basicCardArray.length; i++){
			console.log(file2.basicCardArray[i]);
		 }
		}
		

	});

 }
 //basicQuestion();
module.exports = basicQuestion;