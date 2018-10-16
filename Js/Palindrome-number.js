

function angkaPalindrome(num) {
    var angka = num + 1;   
    var reverse = '';   
    while(true) {
    var i = String(angka);
    reverse = i.split('').reverse().join('');
    
    if(angka === parseInt(reverse)){

    	return angka;
	}
    angka++;   
	
	} 

}

console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000));
