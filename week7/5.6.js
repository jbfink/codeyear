var fullName = "John Doe";

var getFirstName = function(fullName){
  var firstName = "";
  var next = fullName[0];
  var i = 0;
 var length = fullName.length;

 
 while (i < length && next !== " ") {
 //   console.log(fullName[i]);
    firstName += fullName[i];
    i++;
    next = fullName[i];
    
 }
  return firstName;
};

console.log(getFirstName(fullName));
