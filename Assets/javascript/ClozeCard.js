// function Book(name, year) { 
//   if (!(this instanceof Book)) { 
//     return new Book(name, year);
//   }
//   this.name = name;
//   this.year = year;
// }


function ClozeCard(cloze,text){
	if (!(this instanceof ClozeCard)){
		return new ClozeCard(cloze,text);
	}
	this.cloze = cloze;
	this.text = text;	
	this.fullText = this.text + this.cloze;

}
module.exports = ClozeCard;