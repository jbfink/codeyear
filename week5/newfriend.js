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
    firstName: firstName,
    lastName: lastName,
    email: email,
    telephone: telephone
};
contacts[contacts.length] = newFriend;

};

//var firstName = prompt("First name?");
//var lastName = prompt("Last name?");
//var email = prompt("email?");
//var telephone = prompt("Telephone?");

add("John","Fink","x@x.com","555-555-5555");

list();
