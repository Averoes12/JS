//loop
var ulang= true;
while(ulang) {
//pilihan player
var player = prompt("Pilih : gajah, semut, orang");
//pilihan komputer
//membangkitkan pilihan random
var comp = Math.random();

if(comp < 0.34 ){
    comp= "gajah";
}else if(comp >= 0.34 && comp < 0.67) {
    comp= "orang";
}else {
    comp= "semut";
}
//menentukan rules
if(player == comp){
    hasil= "SERI";
}else if(player == "gajah"){
    hasil = (comp == "orang" ) ? "MENANG" : "KALAH";
}else if (player == "semut") {
    hasil = (comp == "orang") ? "KALAH" : "MENANG";
}else if(player == "orang") {
    hasil = (comp == "gajah") ? "KALAH" : "MENANG";

}else {
    hasil = "TIDAK TERDAFTAR";
}

//tampilkan hasil
    alert("Kamu memilih " + player + "\nLAWAN  memilih " + comp + "\nKamu "+ hasil);
ulang = confirm("AYO LAGI!!");
}
alert("YAH MASA NYERAH :P");