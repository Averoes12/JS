//row 1
var a = 1;
var i = "";

for(a; a <= 5; a++) {
    i += "*";
    i += "\n";
}

console.log(i);

//row 2

var a = 1;
var i = "";

for(a; a <= 5; a++) {
    i += "*****";
    i += "\n";
    
}

console.log(i);

//row3

var a = 1;
var i = "";

for(a; a <= 5; a++) {
    for (b = 0; b < a; b++){
    	i += "*"
    }
    i += "\n";
    
}

console.log(i);