//Let's Form a Sentence
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word +" "+ second +" "+ third +" "+ fourth +" "+ fifth +" "+ sixth +" "+ seventh);

//Index Accessing - 1 by 1

var word = 'wow JavaScript is so cool';
var FirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word [7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]; 
var thirdWord  = word [15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[20] + word[21] + word[22] + word[23] + word[24];


console.log("FirstWord: " + FirstWord);
console.log("secondWord: "+ secondWord);
console.log("thirdWord: "+ thirdWord);
console.log("fourthWord: " + fourthWord);
console.log("fifthWord: "+ fifthWord);

//Substring

var word1 = 'wow JavaScript is so cool';
var FirstWord1 = word1.substring(0, 3);
var secondWord1 = word1.substring(4, 14);
var thirdWord1 =  word1.substring(15, 17);
var fourthWord1 = word1.substring(18, 20);
var fifthWord1 =  word1.substring(20, 25);


console.log('First Word: ' + FirstWord1);
console.log('Second Word: ' + secondWord1);
console.log('Third Word: ' + thirdWord1);
console.log('Fourth Word: ' + fourthWord1);
console.log('Fifth Word: ' + fifthWord1);

//Substring & length


var word1 = 'wow JavaScript is so cool';
var FirstWord1 = word1.substring(0, 3);
var secondWord1 = word1.substring(4, 14);
var thirdWord1 =  word1.substring(15, 17);
var fourthWord1 = word1.substring(18, 20);
var fifthWord1 =  word1.substring(20, 25);

var length1 = FirstWord1.length;
var length2 = secondWord1.length;
var length3 = thirdWord1.length;
var length4 = fourthWord1.length;
var length5 = fifthWord1.length;

console.log('First Word: ' + FirstWord1 + ', with length: ' + length1);
console.log('Second Word: ' + secondWord1 + ', with length: ' + length2);
console.log('Third Word: ' + thirdWord1 + ', with length: ' + length3);
console.log('Fourth Word: ' + fourthWord1 + ', with length: ' + length4);
console.log('Fifth Word: ' + fifthWord1 + ', with length: ' + length5);