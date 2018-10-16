function konversiMenit(Menit) {
  
  var menit = Math.floor(Menit / 60)
  var detik = Menit % 60
  
  if (String(menit).length === 1) {
    detik = "0"+detik
  }
  
  var hasil = menit + ":" + detik
  
  return String(hasil)
}

// TEST CASES
console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53)); 
console.log(konversiMenit(88));
console.log(konversiMenit(120));