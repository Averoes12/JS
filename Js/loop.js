var nilai = 1;
var jumlah = 10;
var lembur = 5;
for (nilai; nilai <= jumlah; nilai++) {
    if (nilai <=6 && nilai !== 5) {
        console.log("Angkot No. " + nilai + " beroperasi dengan baik.");
        alert("Angkot No. " + nilai + " beroperasi dengan baik.")
    } else if (nilai === 8 || nilai === 10 || nilai === 5 ) {
        console.log("Angkot No. " + nilai + " sedang lembur.");
        alert("Angkot No. " + nilai + " sedang lembur.");
      } else {
        console.log("Angkot No. " + nilai + " sedang tidak beroperasi.");
        alert("Angkot No. " + nilai + " sedang tidak beroperasi.");
    }
}
