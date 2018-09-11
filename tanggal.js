var tanggal = prompt("masukkan tanggal");
var bulan = prompt("maukkan bulan");
var tahun = prompt("Masukkan Tahun");
switch(tanggal) {
  case "32": {console.log("tanggal tidak tersedia"); break;
  }
  default : console.log("Masukkan Tanggal Dengan benar");
}
switch(bulan) {
  case "1": { console.log(tanggal + ' Januari ' + tahun); break; }
  case "2": { console.log(tanggal + ' Februari ' + tahun); break; }
  case "3": { console.log(tanggal + ' Maret ' + tahun); break; }
  case "4": { console.log(tanggal + ' April ' + tahun); break; }
  case "5": { console.log(tanggal + ' Mei ' + tahun); break; }
  case "6": { console.log(tanggal + ' Juni ' + tahun); break; }
  case '7': { console.log(tanggal + ' Juli ' + tahun); break; }
  case '8': { console.log(tanggal + ' Agustus ' + tahun); break; }
  case '9': { console.log(tanggal + ' September ' + tahun); break; }
  case '10': { console.log(tanggal + ' Oktober ' + tahun); break; }
  case '11': { console.log(tanggal + ' November ' + tahun); break; }
  case '12': { console.log(tanggal + ' Desember ' + tahun); break; }
  case "13" : { console.log('Bulan tidak tersedia'); break; }

  default : ("Masukkan Bulan Dengan benar");
}