// Define substring here
var substring = function(input, start, end) {
    subset = "";
    var i;
for (i = start; i<=end; i++) {
    subset += substring[i];
}
    
return subset;
};
var input = "lorem ipsum dolor";
var start = 6;
var end = 10;

console.log(substring(input,start,end));
// Write test here:
// Call substring, passing "lorem ipsum dolor" to `input`, `6` to 
// `start`, and `10` to `end`.
