
// Funktion um primzahlen zu finden
function isPrim(zahl){
   
        
    for( let i = 3n; i <= Math.sqrt(  zahl  ); i += 2 )
    {
        if( zahl % i == 0 )
        {
            return false;
        }
    }
    // Nur true Wenn Zahl nicht durch 2 teilbar und groesser wie 2.
    return zahl > 2 && zahl % 2 !=  0;

}
function Primfaktor(n){


var maxFactors = BigInt(Math.ceil(Math.log10(Number(n)) / Math.log10(2)));

var tmp = BigInt(new Array(maxFactors));

// Zähler der tatsächlichen Faktoranzahl initialisieren
var anzahlFaktoren = BigInt(0);

/*
 * Jetzt kommt der Trick der Zerlegung: In einer Zählschleife wird
 * wiederholt von 2 (kleinster Primfaktor) bis n (Zahl) gezählt, wobei
 * bei jedem Durchlauf überprüft wird, ob die Zählvariable ganzzahliger
 * Teiler der Zahl ist. Ist dies der Fall, ist ein neuer Primfaktor
 * gefunden. Dieser wird in tmp gesichert, und die ganze Schleife wird
 * "zurückgesetzt", indem der Zähler erneut bei 2 (1++) beginnt und n
 * durch n/Primfaktor ersetzt wird.
 */
for (var j = BigInt(2); j <= n; j++) {
    // Ist j Primfaktor?
    if (n % j == 0) {
        // Primfaktor sichern und Anzahl der Primfaktoren erhöhen
        tmp[anzahlFaktoren++] = j;
        // n ändern
        n = n / j;
        // j erneut auf den vorherigen Wert setzten (wegen j++)
        j--;
    }
}
// Rückgabearray erzeugen, mit Länge der tatsächlichen Anzahl
// von Primfaktoren
var prf = BigInt(new Array(anzahlFaktoren));
// Überführen der Werte des temporären Arrays in das
// Rückgabearray
for (var i = BigInt(0); i < anzahlFaktoren; i++) {
    prf[i] = tmp[i];
}
// Rückgabe
return prf;

}
var givenNumber = BigInt(8515841215550500262534435983514954566633469175071711107775526441643558277110411969873680306754437414445721089366150727232650858346369111136148412000000000000000000);
//givenNumber = 8515841215550500262534435983514954566633469175071711107775526441643558277110411969873680306754437414445721089366150727232650858346369111136148412n;
givenNumber =  BigInt(294243);
var result = Primfaktor(givenNumber);

console.log(result);

