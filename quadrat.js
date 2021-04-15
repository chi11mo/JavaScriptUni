

// Indikator MAX fuer 100 natuerliche zahlen
let MAX = 100;
// die Summe der quadrate
let tempQuSum = 0;
// Das Quadrat der Summe
let tempSumQua = 0;

for(let i = 0; i <= MAX; i++){

tempSumQua =tempSumQua +( i * i);
tempQuSum =tempQuSum + i;


}

let diff = (tempQuSum * tempQuSum) - tempSumQua ;

console.log(diff);