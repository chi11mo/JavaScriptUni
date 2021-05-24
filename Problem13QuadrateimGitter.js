function normaleQu(n) {
    var paralel = 0;

    for (var i = 1; i < n; i++) {
        paralel = paralel + (i * i);
    }

    return paralel;
}

function diaQu(n) {
    var dia = 0;
    for (var i = 1; i <= n; i++) {
        if (n - 2 * i > 0) {
            dia = dia + ((n - 2 * i) * (n - 2 * i));
        }
    }
    return dia;
}

function aslantQu(n) {
    var aslant = 0;
    for (var i = 2; i < n; i++) {
        for (var k = 1; k < i; k++) {
            if (n - i - k > 0) {
                aslant = aslant + ((n - i - k) * (n - i - k));
            }
        }
    }
    aslant = aslant * 2;
    return aslant;
}

var n = 500;
var result = aslantQu(n) + diaQu(n) + normaleQu(n);

console.log("Es gibt bei einem " + n + "x" + n + " Quadrat " + result + " moeglichkeiten.");