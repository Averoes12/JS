//function deklarasi

//function volumeKubus(a, b) {
    //var kubus1 = a * a * a;
    //var kubus2 = b * b * b;
    //var total = kubus1 + kubus2;
    
    
     
 //   return total;


//alert(volumeKubus(4, 5));
//alert(volumeKubus(75, 89));x
//contoh rekursif
//biar funtion nya berenti tambah kan base case
function angka(n) {
    //ini contoh base case
    if(n === 21) {
        return;
    }    
    alert(n);
    angka(n+1);
}

angka(1);
//contoh looping
function faktorial(n) {
    var hasil = 1;
    for (var i= n; i--){
        hasil *= i;
    }
    return hasil;
}

//looping jadi rekursif

function faktorial(n){
    if (n === 0) return 1;
    return * faktorial(n-1);
}


//contoh funtion exression

var tampilNama= function (nama) {
                alert("halo" + nama);
}