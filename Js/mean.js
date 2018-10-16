function rata_rata(num) {
	var data = num
	var jumlahData = 0

	for(i = 0; i < data.length; i++){
   	
   		jumlahData += data[i];
     
}

	rata2 = jumlahData / data.length
    
    return Math.round(rata2) 
}

console.log(rata_rata([7,7,7,7,7]))
console.log(rata_rata([1,2,3,4,5]))
console.log(rata_rata([3,5,7,5,3]))
console.log(rata_rata([6,5,4,7,3]))


