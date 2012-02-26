var setName = function(yourName){
    this.name = "Your name is " + yourName;
};

// create a human object with the desired method
var human = {
  setHumanName: setName
  };

// now call human.setHumanName

human.setHumanName("Bob");
console.log(human.name);

// check to see that your method works by printing
// human.name to the console

