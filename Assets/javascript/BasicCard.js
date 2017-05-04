// function Book(name, year) { 
//   if (!(this instanceof Book)) { 
//     return new Book(name, year);
//   }
//   this.name = name;
//   this.year = year;
// }

function BasicCard(front,back){
	if (!(this instanceof BasicCard)){
		return new BasicCard(front,back);
	}
	//this.basicCardArray = [];
	this.front = front;
	this.back = back;
	

	}
	





module.exports = BasicCard;

