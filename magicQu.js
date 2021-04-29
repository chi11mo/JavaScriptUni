
// posible numbers in quadrat
let result = [1,2,3,4,5,6,7,8,9];



/* Formel zur brechung der Magischen Zahl ((n * n * n) + n)/2
 also bei 3x3 Matrix n = 3*Magische Zahl gleich 15*/


 let magicNumber = ((3*3*3)+3)/2;

 console.log(magicNumber);


 //Creat rnd Number 0 to 2
 function rndNumber(){
    return Math.floor(Math.random() * 3);
}


// functon to create rnd 3x3 Quadrat in 2d array and return array

 function createQuadrat(){


    // blank quadrat
    let arr=[[0,0,0],[0,0,0],[0,0,0]];


    let row = rndNumber();
    let col = rndNumber();

    
    for(let i =0 ; i < result.length; i++){


        while(arr[row][col] != 0){
                row = rndNumber();
                col = rndNumber();
        }

        arr[row][col] = result[i];
    }


 return arr;
 }

// function to prove it is a magic quadrat
 function testMagic(arr){

    
     let tempTestNumber;



    // test Row == magicnumber
    for(let col = 0 ; col < arr.length; col++){
        tempTestNumber = 0;
        for(let row = 0 ; row < arr.length; row++){
            tempTestNumber += arr[col][row];
        }
        if(tempTestNumber != magicNumber)
            return false;
    }

    // test Collumn== magicnumber
    for(let col = 0 ; col < arr.length; col++){
        tempTestNumber = 0;
        for(let row = 0 ; row < arr.length; row++){
            tempTestNumber += arr[row][col];
        }
        if(tempTestNumber != magicNumber)
            return false;
    }


    // test diagonal == magic number
    tempTestNumber = arr[0][0]+ arr[1][1] + arr[2][2];
    if(tempTestNumber != magicNumber)
        return false;

        tempTestNumber = arr[0][2]+ arr[1][1] + arr[2][0];
        if(tempTestNumber != magicNumber)
            return false;

    
            
    // if all test are true return true
    return true;



 }

  let test = createQuadrat();



//let test = [[9,2,4],[5,7,3],[1,6,8]];


 while(testMagic(test) == false)
     test = createQuadrat();

console.log("the magic quadrat number is : " +test);








