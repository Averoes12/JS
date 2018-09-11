var count = document.getElementById('count');
var no = 0;
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');

plus.addEventListener('click', function(){
	no = no + 1  ;
	console.log("Nomer Ke " + no);
	count.innerHTML = no;
})

minus.addEventListener('click', function(){
	no = no -1 ;
	console.log("Nomer Ke " + no);
	count.innerHTML = no;

})