

let a,b,c;
// Volumen Grenze
let SUM = 100000000;
/* Hoechster Stand von a variable , 
sonst wuerde das programm ewig laufen. Durch testen herausgefundene Grenze.*/
let LOOP = 464;

let result = 0;

/*
Formel A= 1 bis 464, b = a +1, c = (b - a) + b;
geht jeweils durch a + n.
*/
for(a = 1 ;a < LOOP ; a++){
    b = a + 1;
    
    c = (b - a) + b;

   

    for(b = a + 1; b < SUM; b++){
        c = (b - a) + b;


        if(a*b*c < SUM){
            console.log(a," * ",b," * ",c," = ",a*b*c);
            result = result + (a*b*c);
        }
       
    }
}

console.log(" Addition aller Volumen arithemetischer Quader : ", result );
