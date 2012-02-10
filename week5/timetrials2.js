// runner times
var carlos = [9.6,10.6,11.2,10.3,11.5];
var sarah = [10.6,11.2,9.4,12.3,10.1];
var timothy = [12.2,11.8,12.5,10.9,11.1];

var calculateAverage = function (raceTimes) {
var totalTime = 0;
  for ( i = 0; i < raceTimes.length; i++ ) {
   totalTime = (totalTime || 0) + raceTimes[i];
  
// assign variable averageTime
}
var averageTime = totalTime / raceTimes.length;    
  return averageTime;


  };

// write the result of your function call console.log()
console.log(calculateAverage(timothy));
