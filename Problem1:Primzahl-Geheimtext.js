




// Funktion um primzahlen zu finden
function isPrim(zahl){
   
        
        for( let i = 3; i <= Math.sqrt(  zahl  ); i += 2 )
        {
            if( zahl % i == 0 )
            {
                return false;
            }
        }
        // Nur true Wenn Zahl nicht durch 2 teilbar und groesser wie 2.
        return zahl > 2 && zahl % 2 !=  0;
    
}
// Entschluesselner text
let str = "NILYOKVMXQEYPTIYRKIOFQMPMWFDZKAXBZPFHQYELGEIOUNYGJ"





// Schleife geht solange durch bis i = laenge des Strings 
//und gibt alle chars in dem String aus an jeder Stelle gleich prinzahl
for(let i= 0 ; i< str.length; i++){
    if(isPrim(i) ){
    console.log(str.charAt(i-1))
        
    }
}
