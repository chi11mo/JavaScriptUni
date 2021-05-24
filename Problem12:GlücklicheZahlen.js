var n = 30;
var number = new Array(n);
var counter = 2;
for (var i = 0; i < n; i++) {
    number[i] = i + 1;
}

var tempList = new Array(n);

for (var count = 1; count < 4; count++) {


    counter = number[count];
    for (var i = counter; number[i] < n;) {

        number[i] = 0;
        i = i + counter;

    }
    number = number.filter(el => {
        return el != 0;
    });

}
//number = number.filter(Number(0));
console.log(number);