function bmi(bb, tb) {
	var b = bb / (tb * tb);
	if (b < 17){
		return "Kurus";
	}else if (b < 23) {
		return "normal";
	}else if(b < 27){
		return "Gemuk";
	}else if (b > 27){
	return "Obesitas";
	}else {
		return "Data Tidak Valid"
	}
}

console.log(bmi(52, 169));		