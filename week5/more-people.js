Person = function(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
};

var bob = new Person("Bob", "Jones","(650) 777 - 7777","bob.jones@example.com");
var mary = new Person("Mary", "Johnson","(650) 888 - 8888","mary.johnson@example.com");

var contact = [];
contacts[0] = bob;
contacts[1] = mary;

console.log(contacts[1].phoneNumber);
