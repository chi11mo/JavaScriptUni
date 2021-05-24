
// funktion der Berechung der Catalan zahl rekrusive
// Variable n = counter n+1
function catalan(n){

    let tempCatalanNumber = 0;


    if (n<= 1)
    return 1;

    // Aufloesung der Formel zur berechnung der Catalan Zahl 
    for ( let i = 0; i < n ;i++){
        tempCatalanNumber = tempCatalanNumber + catalan(i) * catalan(n -i -1);
    }

    return tempCatalanNumber;

}



// counter = n in formel
let counter = 0;
// jeweilige Catalan Nummer
let catalanNumber = 0;
// Bis welche Stelle soll berechnet werden
let numberLength = 16;


while(catalanNumber.toString().length < numberLength){

catalanNumber = catalan(counter)
console.log(catalanNumber);

counter++;

}

console.log("Catalan Nummer mit 16 stellen");
console.log(catalanNumber);