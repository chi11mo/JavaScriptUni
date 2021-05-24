//Create pascal'schen Dreiecks with given Row Size

function createPascal(howManyRow){

var pascalDrei = new Array(2);




    for(var i = 0; i < howManyRow; i++) {
        var temp = 1;
        pascalDrei[i] = new Array(howManyRow+1)
        for(var j = 0; j <= howManyRow; j++) {
            if(temp != 0)
                pascalDrei[i][j] = temp;
            
            temp = temp * (i - j) / ( j + 1);
           
        }
    }
    return pascalDrei;
}


// create Floyd'schen Dreiecks with given Row

function createFloyd(howManyRow){

    var floydDrei = new Array(2);
    var count = 0;




    for(var i = 0; i < howManyRow; i++) {
        var temp = 1;
        floydDrei[i] = new Array(howManyRow+1)
        for(var j = 0; j <= i; j++) {
            count++;
           
            floydDrei[i][j] = count;
            
            
           
        }
    }
    return floydDrei;
    
}
// function to return the sum of last row numbers of  pascal'schen Dreiecks
function sumRowPascal(row){
    var pasc = createPascal(row);
        var size = row-1;
        var result = 0 ;
        for(var i = 0; i < pasc.length; i++){
            if(pasc[size][i]!= undefined)
            result += pasc[size][i];
        }
    return result;
}
// function to return the sum of last row numbers of  Floyd'schen Dreiecks
function sumRowFloyd(row){
        var floyd = createFloyd(row);
        var size = row-1;
        var result = 0 ;

            for(var i = 0; i < floyd.length; i++){
                if(floyd[size][i]!= undefined)
                result =result +  floyd[size][i];
                
            }

      
    return result;
}




var rowSum =  83215;
var i = 0;


// give Row Number sum when RowSum from Floyd is 83215
while(sumRowFloyd(i)!=  rowSum){
    i++;
}
// print out sum of Row Numbers from Pascal triangle
console.log(sumRowPascal(i));

