var inquirer = require("inquirer");
var fs = require("fs");
addQuestion = require("./addQuest.js");
var showBasicCards = require("./showBasicCards.js");


function main(){
	inquirer.prompt({
		type: "list",
	    name: "size",
	    message: "Play Game",
	    choices: ["Basic Question", "Cloze Question"]
	 }).then(function(answer){
		if(answer.size === "Basic Question"){
			
			showBasicCards();


		}
		else if(answer.size === "Cloze Question"){
			console.log("Cloze Question");
			return console ===("Cloze Question");

		}

		});
	}
main();

