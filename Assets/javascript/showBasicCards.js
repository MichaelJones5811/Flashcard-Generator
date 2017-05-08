var fs = require("fs");
    var inquirer = require("inquirer");
    var i = 0;
var showBasicCards = function() {
    
    
    
    var basicArr = JSON.parse(fs.readFileSync("bQuestion.JSON", "utf8"));
       
        if (i < basicArr.length) {
            inquirer.prompt([{
                type: "list",
                name: "answer",
                message: basicArr[i].front + "\n" + "  do you know to see the answer?",
                choices: ["Yes","No"]
            }]).then(function(response) 

            {
                
                if (response.answer === "Yes") {
                    
                    console.log(basicArr[i].back);
                    i++;
                     showBasicCards();
                    
                } else {
                    return console.log("ok bye");
                   

                };
               
            });
        } else {
            console.log("Good work!" + "\n");
           
            // return
        };
       
    };

    module.exports = showBasicCards;