// This works, but I'm mostly putting it here so I can come back to it
// because I don't know fully *why* and would like to think about it.
var nyc = {
    fullName: "New York City",
    mayor: "Michael Bloomberg",
    population: 8000000,
    boroughs: 5
};
var property = nyc.this;

// write a for-in loop to print the value of nyc's properties
for (property in nyc) {
    property = 
    console.log(nyc[property]);
}
