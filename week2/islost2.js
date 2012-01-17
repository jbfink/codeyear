var lost = [4, 8, 15, 16, 23, 42];
var count = lost.length;

var isLost = function (n) {
  for (i = 0; i < count; i++) {
    if ( n === lost[i]) {
      return true;
      return false;
    }
}
}
if ( isLost(12) ) {
  console.log('12 is a lost number');
}

if ( isLost(16) ) {
  console.log('16 is a lost number');
};
