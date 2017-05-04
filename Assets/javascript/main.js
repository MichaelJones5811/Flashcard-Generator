var inquirer = require("inquirer");

addQuestion = require("./addQuest.js");


function main(){
	inquirer.prompt({
		type: 'list',
	    name: 'size',
	    message: 'Play Game or Admin',
	    choices: ['Play Game', 'Admin']
	 }).then(function(answer){
		if(answer.size === "Play Game"){
			return console.log("Play Game");

		}
		else if(answer.size === "Admin"){
			console.log("Admin");
			return addQuestion();
		}

		});
	}

main();
