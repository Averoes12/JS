var array = ["satu", "dua", "tiga"]
array.push("empat");

//nambahin nilai array dibelakang

var array1 = ['dia', 'suka', 'minum', 'makan']
array1.pop(2);

//hapus nilai array paling terakhir

array.unshift("nol");
//nambahin nilai array dari depan

array1.shift();
//hapus nilai array dari depan

array1.join(" ");
//gabungin array

array.sort();
//urutin array

console.log(array);
console.log(array1);

var arr = ["makan", "minum", "bobo", "bangun"]
arr.slice(1,3);

arr1 = arr.slice(1);
arr2 = arr.slice(1,2);
arr3 = arr.slice(2,3);
arr4 = arr.slice(0,3);

console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

//untuk mengambil bagian array


 //fungsi splice = Splice adalah fungsi array yang menghapus dan/atau menambah nilai ke dalam array
var aray = ["buku", "laptop", "komputer"]
//splice(index mulai, yg mau diapus, "nama yg mau dimasukkin")
aray.splice(0,1, "ayam", "nasi");//mulai dari 0, yg diganti array 1, diganti jadi "ayam", "nasi"
console.log(aray);

var aray1 = ["buku", "laptop", "komputer"]
aray1.splice(1,1, "nasi", "rendang");//mulai dari 1, yg diapus array 1, diganti jadi "nasi","rendang"

console.log(aray1);

//split = Split adalah fungsi yang memecah string dan mengembalikan nilai berupa array sesuai dengan separator atau pemisah tertentu yang didefinisikan.
var asu = "i have not eaten"
var Split = asu.split(" ");//dipisah dengan spasi
console.log(Split);

//array 2 Dimensi
var arr2D = [['satu', 'dua'],["makan", "minum"],['susu', 'soda']]

console.log(arr2D[0][1]);
console.log(arr2D[2]);



