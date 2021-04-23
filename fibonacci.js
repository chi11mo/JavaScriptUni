


let MAX = 100000000000000;
let fib = [] ;








fib[0] = 0;
fib[1] = 1; 
//n <= 2
let n = 2;
let fibTemp = 0;



// Fibonacci Zahlen bis 100 Billionen in array Speichern fib.
while (fibTemp < MAX )
 {
  
  fib[n] = fib[n - 2] + fib[n - 1];
  fibTemp  = fib[n];
  n++;
}

/* Temporare hoechster Teiler teilerTemp[0] gleich fib Zahl teilerTemp[1] gleich 
wie viele andere fib zahlen teilbar sind */
let teilerTemp = [];
teilerTemp[0] = 0;
teilerTemp[1] = 0;


/* Geht alle Fibonacci Zahlen durch und Zaehlt die Teilbarkeit */
for(let i = 0 ; i < fib.length; i++){
let counter = 0;


    for(let k = 0 ; k < i; k++){

        if(fib[i]%fib[k]==0)
            counter++;
     }


     // Falls eine Groessere teilbare zahl gefunden wird
    if(counter > teilerTemp[1]){
        teilerTemp[1] = counter;
        teilerTemp[0] = fib[i];
    }




}

console.log(teilerTemp[0]);