for (i=1;i<=20;i++) {
 if (i % 3 === 0) {
 if (i % 5 === 0) {
 console.log("FizzBuzz");
 continue;
 }
 console.log("Fizz");
 continue;
}
{
if (i % 5 === 0) {
    console.log("Buzz");
    continue;
}
console.log(i);
continue;
}
}
