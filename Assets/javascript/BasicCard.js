// function Book(name, year) { 
//   if (!(this instanceof Book)) { 
//     return new Book(name, year);
//   }
//   this.name = name;
//   this.year = year;
// }
// var file2 = require("./file2.JSON");
function BasicCard(front,back){
	if (!(this instanceof BasicCard)){
		return new BasicCard(front,back);
	}
	
	this.front = front;
	this.back = back;
	
	
	
	
};





module.exports = BasicCard;

