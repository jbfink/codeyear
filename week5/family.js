// Our Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var family = [];

// Now we can make an array of people
family[0] = new Person("alice",40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);

// loop through our new array
var i;
for (i = 0; i < 4; i++) {
//console.log(i);
console.log(family[i].name);
}
