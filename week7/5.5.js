var fullName = "John Doe";

var getFirstName = function(fullName){
  var next = fullName[0];
  var i = 0;
 var length = fullName.length;

 
 while (i < length && i !== " ") {
    console.log(fullName[i]);
    i++;
    next = fullName[i];
 }
  
};

getFirstName(fullName);
