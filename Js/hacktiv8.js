// Pilih Nama : Mikael nina danu zero
//Plih Peran : Ksatria Penyihir Tabib
var nama = prompt("Pilih nama \n Mikael \n nina \n danu \n zero");
var peran = prompt("Pilih peran \n Ksatria \n Penyihir \n Tabib");

if (nama === "" && peran) {
	console.log("Masukkan Nama Anda");
}else if(nama && peran === "") {
	console.log("Pilih Peran Anda");

 }else if (peran === "Ksatria") {

  console.log("Selamat datang di Dunia Proxytia," + nama);
  console.log("Halo Ksatria " + nama + ",kamu dapat menyerang dengan senjatamu!");
} else if (peran === "Tabib") {

  console.log("Selamat datang di Dunia Proxytia," +nama);
  console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
} else if (peran === "Penyihir") {

  console.log("Selamat datang di Dunia Proxytia," + nama);
  console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");

} else {
  console.log("nama dan peran harus diisi");
}
