var m = 1;
var b = 100;

for (m; m <= b; m++) {

	if((m != 1) && (m %2 === 0)){
		console.log(m + "Genap");
	}else if ((m != 1) && (m %2!=0)) {
		console.log(m + "Ganjil");
	}else {
		console.log("");
	}
}


