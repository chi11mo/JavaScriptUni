var myAplphabet = [

];

// Init Aphabet in Array
for (let i = 65; i < (65 + 26); i++) {
    myAplphabet.push(String.fromCharCode(i));
}
myAplphabet.push(" ");

// Search letter 
function searchChar(n) {
    for (let i = 0; i < myAplphabet.length; i++) {
        if (i == n) {
            return myAplphabet[i];
        }
    }
}

// Search number
function searchNumber(n) {
    for (let i = 0; i < myAplphabet.length; i++) {
        if (myAplphabet[i] == n) {
            return i + 1;
        }
    }
}

// Function to translate string into numbers

function stringIntoNumbers(givenString) {
    var tmpString = reverse(givenString);
    var resultArray = [];

    for (var i = 0; i < tmpString.length; i++) {
        resultArray.push(searchNumber(tmpString[i]));
    }
    return resultArray;
}

// Function to translate numbers into strings
function numbersIntoStrings(givenNumbers) {
    var result = "";
    for (var i = 0; i < givenNumbers.length; i++) {
        if (myAplphabet[givenNumbers[i] - 1] == undefined) {
            result += " ";
        }
        else
            result += myAplphabet[givenNumbers[i] - 1]
    }
    return result;

}

//split strings
function reverse(s) {
    return s.split("").join("");
}

//convert numbers if they get out of range of the Alphabet.
function convertNumber(n) {
    if (n < 0)
        return 27 + n;
    if (n > 27)
        return n % 27;

    return n;
}

// encrypt a given string with given seed.
function encrypt(decryptString, seed) {

    var numbers = stringIntoNumbers(decryptString);
    var numberString = numbers;
    numberString[0] = convertNumber(numberString[0] - seed);
    var tmpLetter = numberString[0];

    for (var i = 1; i < numberString.length; i++) {
        numberString[i] = convertNumber(numberString[i] - tmpLetter);
        var tmpLetter = numberString[i];
    }

    return numbersIntoStrings(numberString);
}

var decrypString = "YBPNIHVYSQXQNEIALTENWSEDIYYPDBDWSTGNB";

var seed = 0;

for(; seed < 20; seed++) {
    var result = encrypt(decrypString, seed);
    console.log(" Der seed ist : " + seed + " der Satz ist : " + result);
}


///Old Stuff


/*
// getting most char in a string.
function getMax(str) {
    var exp = str;
    var expCounts = {};
    var maxKey = '';
    for (var i = 0; i < exp.length; i++) {
        var key = exp[i];
        if (!expCounts[key]) {
            expCounts[key] = 0;
        }
        expCounts[key]++;
        if (maxKey == '' || expCounts[key] > expCounts[maxKey]) {
            maxKey = key;
        }
    }
    var max = [];
    for (var i = 0; i < myAplphabet.length; i++) {
        console.log(expCounts[myAplphabet[i]]);

        if (expCounts[myAplphabet[i]] != undefined) {
            if (expCounts[myAplphabet[i]] >= expCounts[maxKey]) {
                max.push(myAplphabet[i]);
            }
        }
    }
    
    return max;
}
//getting seed from most char in string
function getSeed(seedChar) {
    var seed;
    var eNumber = 4;
    var seedCharArray = stringIntoNumbers(seedChar);

    seed = eNumber - seedCharArray[0];

    seed = Math.abs(seed);

    return seed;
}
*/