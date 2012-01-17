// add a parameter called hourOfDay to the function
var taxiFare = function (milesTraveled, hourOfDay) {
  var baseFare = 2.50;
  var costPerMile = 2.00
  var nightSurcharge = 0.50; // 8pm to 6am, every night

  var cost = baseFare + (costPerMile * milesTraveled);
  
  // add the nightSurcharge to the cost starting at 
  // 8pm (20) or if it is before 6am (6)
  if (hourOfDay > 19 || hourOfDay < 7) 
  {cost = cost + .5;}
  return cost;
};
