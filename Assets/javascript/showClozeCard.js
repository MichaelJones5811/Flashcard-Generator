var fs = require("fs");
    var inquirer = require("inquirer");
    var i = 0;
var showClozeCard = function() {
    
    
    
    var clozeArry = JSON.parse(fs.readFileSync("cQuestion.JSON", "utf8"));
       
        if (i < clozeArry
    .length) {
            inquirer.prompt([{
                type: "list",
                name: "answer",
                message: clozeArry[i].front + "\n" " do you know to see the answer?",
                choices: ["Yes","No"]
            }]).then(function(response) 

            {
                
                if (response.answer === "Yes") {
                    
                    console.log(clozeArry[i].back);
                    i++;
                     showClozeCard();
                    
                } else {
                    return console.log("ok bye");
                   

                };
               
            });
        } else {
            console.log("Good work!" + "\n");
           
            // return
        };
       
    };

    module.exports = showClozeCard;