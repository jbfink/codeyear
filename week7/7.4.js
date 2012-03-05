
var r;
var table = [
    ["Person",  "Age",  "City"],
    ["Sue",     22,     "San Francisco"],
    ["Joe",     45,     "Halifax"]
];
var rows = table.length;

for (r = 0; r < rows; r++) {
 var c;
 var cells = table[r].length;
 var rowText = "";
 for (c = 0; c < cells; c++) {
 if ((c+1) < cells) {
 rowText = rowText + table[r][c]+ "  " ;
 } else {
 rowText = rowText + table[r][c];
};
};
console.log(rowText);
};
