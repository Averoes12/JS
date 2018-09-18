var vocal = 'aiueoAIUEO'
var count = 0
var m = 0

function vowel (str) {
	for(m; m < str.length; m++){
		if(vocal.indexOf(str[m]) !== -1){
			count += 1
		}
	}
	return count
}