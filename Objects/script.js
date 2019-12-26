animal = new Object ();
animal.name = "Doggo";
animal.kind = "German Shepherd";
animal.speak = function () {
    return "hey bro!!!";
}
console.log(`Dog says ${animal.speak()}`)

//============================\\

book = new Object ();
book.title = "The Robots of dawn";
book.author = "Isaac Asimov";
book.readingStatus = true;
    checkreadingStatus = function () {
    if(this.readingStatus === true) {
       return "Already read 'The Robots of dawn' by Isaac Asimov.";
    } else {
        return "You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).";
    }
}; 

console.log(checkreadingStatus())
