// Pilih Nama : Mikael nina danu zero
//Plih Peran : Ksatria Penyihir Tabib
var nama = prompt("Pilih nama \n Mikael \n nina \n danu \n zero");
var peran = prompt("Pilih peran \n Ksatria \n Penyihir \n Tabib");

if (nama === "Miakel" && peran !== peran ) {

    console.log("Halo Mikael, Pilih peranmu untuk memulai game!");
} else if (nama === "nina" && peran === "Ksatria") {

  console.log("Selamat datang di Dunia Proxytia, Nina");
  console.log("Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!");
} else if (nama === "danu" && peran === "Tabib") {

  console.log("Selamat datang di Dunia Proxytia, Danu");
  console.log("Halo Tabib Danu, kamu akan membantu temanmu yang terluka.");
} else if (nama === "zero" && peran === "Penyihir") {

  console.log("Selamat datang di Dunia Proxytia, Zero");
  console.log("Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!");

} else if(nama !== nama && peran !== peran) {
  console.log("nama atau peran tidak ada");

} else {
  console.log("nama dan peran harus diisi");
}