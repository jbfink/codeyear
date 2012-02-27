function Company(name,yearFounded,profitLevel) {
   this.name = name;
   this.year = yearFounded;
   this.profits = profitLevel;
   var bankBalance = 20;
   
   // add your method here
   getBalance = function() {
       return bankBalance - 2;
   };
}

var myCompany = new Company("Codecademy", "2011", "insufficient!");
console.log( myCompany.getBalance() );
