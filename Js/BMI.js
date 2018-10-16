function bmi(bb, tb) {
	var b = bb / (tb/100 * tb/100);
	console.log(b);
	if (b < 17 || b < 18.4){
		return "Kurus";
	}else if (b === 18.5 || b < 25.0 ) {
		return "normal";
	}else if(b === 25.1 || b < 27){
		return "Gemuk";
	}else if (b > 27){
	return "Obesitas";
	}else {
		return "Data Tidak Valid"
	}
}

console.log(bmi(52, 170));		