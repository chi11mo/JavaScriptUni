let str = [ 'BYCKSTABFNIALAT', 'BUCHSTRBENSFLPT', 'BUCNSIHBENSALAT', 'BVIXZIREFNZALAY', 'BUGH-IRREMSRLAI',
    'BVIHSYABENZALRY', 'RYCHSTHEENSAIAT', 'BUIHZYABF-SACAI', 'RYGKS-ABFH-ALA-', 'BVGHSTPPENSR-AT'

];

let result= "";


function alphCounter(letter, counter){
    this.letter = letter;
    this.counter = counter;
}

var myCounter = [
  
];

// Init Aphabet in Array
for(let i = 65; i < (65+26) ; i++){
myCounter.push(new alphCounter(String.fromCharCode(i),0));

}


// Zaehlt die haufigkeit von Buchstaben in uebergebenden string in eine hilfstrucktur (Buchstabe, counter)
function countLetter(string){
    for(let i = 0 ; i < string.length; i++){
        for(let k= 0; k < myCounter.length; k++){
            if(string.charAt(i)== myCounter[k].letter ){
                myCounter[k].counter++;
                
            }
        }
        
        
    }
    takeMostLet();
}


// Sucht aus der hilfstruktur denn am meisten vorkommenden buchstaben heraus und speicher ihn in Result
function takeMostLet(){
    tempresult = new alphCounter();
    tempresult = myCounter[0];
    
    for(let i = 1 ; i < myCounter.length; i++){
        if(tempresult.counter < myCounter[i].counter)
            tempresult = myCounter[i];
            

    }
   
    
    result = result + tempresult.letter;
    deleteCounter();
}

// loescht  den counter fuer denn naechsten String
function deleteCounter(){
    for(let i = 0 ; i < myCounter.length; i++){
       myCounter[i].counter = 0;

    }
}



// Spaltn Buchstaben in Strings zusammenfassen
for(let i = 0; i < str[0].length; i++){
    let tempStr ="";
    for(let k = 0 ; k < str.length; k++){
    
       tempStr = tempStr + str[k].charAt(i);
    }
   
    countLetter(tempStr);
    
}

console.log(result);
