// recreate your Candy class here
function Candy(name) {
    this.name = name;
}

// extend the prototype of Candy with a "printName" method

Candy.prototype.printName = new function() {
    console.log(name);
};

// testing code for your method
var chocolate = new Candy("chocolate");
chocolate.printName();

var gummyBears = new Candy("gummy bears");
gummyBears.printName();
