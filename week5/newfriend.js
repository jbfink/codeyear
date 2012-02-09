var bob = {
    firstName: "Bob",
    lastName: "Jones",
    
    phoneNumber: "(650) 777 - 7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    
    phoneNumber: "(650) 888 - 8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson (person) {
    console.log(person.firstName + " " + person.lastName);
}

list = function () {
    var length = contacts.length;
    for (i = 0; i < length; i++) {
        printPerson(contacts[i]);
    }
};
list();

search = function(lastName) {
    var length = contacts.length;
    for (i = 0; i < length; i++) {
    if (contacts[i].lastName === lastName) {
        printPerson(contacts[i]);
    }
    }
};
search("Jones");

add = function(firstName, lastName, email, telephone) {
    var newFriend = {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    telephone: this.telephone
    }
};
