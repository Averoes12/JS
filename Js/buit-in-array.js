
function dataHandling2() {
	var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
	input.splice(1,1,"Roman Alamsyah Elsharawy")
	input.splice(4,1,"Pria"," SMA Internasional Metro ")	

console.log(input);

var ttl = input[3]
var nama_bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
var bulan = nama_bulan[4]

console.log(bulan);

var tahun = input[3].split("/")
var tahun_sort = tahun.sort(function(a, b) { return b-a; });
 
console.log(tahun_sort);
 
var nama = input[1].slice(0,15)
console.log(nama);

}

dataHandling2();