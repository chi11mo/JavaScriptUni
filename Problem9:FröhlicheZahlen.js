
// function to count length of digits
function countDigits(i)  {
    return (i + "").length;
  }


  // function to find Froehliche and unfroehliche zahlen
function froZahl(k){
    
    var result = k;
   
    
while(true){

    var temp =0;
    var tempResult =0;
    var modZahl = 10;
    var endTempResult = 0;
        for(var i = 0; i <= countDigits(result); i ++){


            result = result - temp;
            
            temp = result % modZahl;
            tempResult =temp / (modZahl/10);
            modZahl = modZahl*10;

            endTempResult += tempResult*tempResult;

    
        }
    result = endTempResult;
        
    if(result == 1)
        return true;

    if(result == 4)
        return  false;
}


}



var countHappyNumbers = 0;
// Checking every Number till 10 mio.
for(var i = 1; i < 10000000 ; i++){
    if(froZahl(i)== true)
        countHappyNumbers++;
}

console.log("Anzahl der Happy Numbers : " + countHappyNumbers);


