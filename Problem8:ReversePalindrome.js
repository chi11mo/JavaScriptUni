var alpha=function(beginA,beginZ){
    this.aSide = beginA;
    this.zSide = beginZ;

}

var ALPHSIZE = 26; 
var alphabet = [];

var result = "SJFUQPKMNPIYDWBENBYMGKOLPEDQGGTTJWLUPIYZTGABRKFBAZIKPLZAD";

// init 
for(var i= 0 ; i < ALPHSIZE ; i++){
    alphabet[i]= new alpha(String.fromCharCode(65+i),String.fromCharCode(90-i));
}

var resultTmp = "";
for(var i= 0 ; i < result.length ; i++){
    for(var k= 0 ; k < ALPHSIZE ; k++){
        if(result.charAt(i)== alphabet[k].aSide){
            resultTmp += alphabet[k].zSide;
        }
    }
}


function reverse(s){
    return s.split("").reverse().join("");
}


resultTmp = reverse(resultTmp);



for(var i= 0 ; i < ALPHSIZE ; i++){
    console.log(alphabet[i].aSide,alphabet[i].zSide);
}

console.log(result);
console.log(resultTmp);



var result = "SJFUQKMNPIYDWBENBYMGKOLPEDQGGTTJWLUPIYZTGABRKFBAZIPLZAD";



