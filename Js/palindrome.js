function balikKata(string) {
	var kata = string.split('').reverse().join('');
	if (kata === string) {
		return true;
	}else {
		return false;
	}

}

console.log(balikKata('Super'));
console.log(balikKata("haji ijah"));
console.log(balikKata('ini'));
console.log(balikKata("ayam"));
console.log(balikKata("rotator"));