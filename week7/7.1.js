var person = {
    name: "Morgan Jones",
    telephone: "(650) 777 - 7777",
    email: "morgan.jones@example.com"
};

for (var propertyName in person) {
 
 console.log(propertyName + ": " + person[propertyName]);
 // Your code here
}
