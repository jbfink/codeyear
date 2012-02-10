// runner times
var carlos = [9.6,10.6,11.2,10.3,11.5];
var liu = [10.6,11.2,9.4,12.3,10.1];
var timothy = [12.2,11.8,12.5,10.9,11.1];

// declare your function calculateTotal here
var calculateTotal = function(raceTimes) {
    var totalTime = 0;
    for (i = 0; i < raceTimes.length; i++) {
        totalTime = totalTime + raceTimes[i];
    }
return totalTime;

};



var liuTotal = calculateTotal(liu);

console.log(liuTotal);
