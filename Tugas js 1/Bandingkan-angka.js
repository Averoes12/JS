function banding(a, b){
	if(a < b){
		return true;
	}else if(a === b) {
		return -1;
	}else {
		return false;
	}
}

console.log(bandingkanAngka(5, 8));
console.log(bandingkanAngka(5, 3));
console.log(bandingkanAngka(4, 4));
console.log(bandingkanAngka(3, 3)); 
console.log(bandingkanAngka(17, 2));