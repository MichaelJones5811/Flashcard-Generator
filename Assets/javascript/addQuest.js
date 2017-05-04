
var inquirer1 = require("inquirer");
var basicQuestion = require("./BasicQuestion.js");

var addQuestion = function(){
    inquirer1.prompt({
        type: 'list',
        name: 'size',
        message: 'What Kind of Game Would You Liked To Create',
        choices: ['Basic Card', 'Cloze Card'],
    }).then(function(answers){
    	//console.log(answers.size);
        if(answers.size === 'Basic Card'){
        	basicQuestion();
           
        }
        else{
            console.log('Cloze Card');
        }

    });

}
//addQuestion();

module.exports = addQuestion;