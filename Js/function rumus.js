//Rumus persegi

function persegi(a, b){
    var luas = a * b;

    return luas;

}

console.log("Rumus Persrgi " + persegi(5, 6));

//Rumus Segitiga
function segitiga(a, b, c) {
    var total= a + b + c;
    return total;
}

console.log("Rumus segitiga " + segitiga(3, 4, 5));

//rumus kubus
function kubus(a) {
    var total = a * a * a;

    return total;
}
console.log("Rumus Kubus " + kubus(4));

//rumus tabung
function tabung(a, b, c) {
    var total= a * b * b * c;
    return total;
}

console.log("Rumus tabung " + tabung(3.14, 5, 12));

//jajar genjang
function jajar(a, b) {
    var total= a * b;

    return total;
}

console.log("Rumus jajargenjang " + jajar(32, 89));
