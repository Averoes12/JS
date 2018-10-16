var no = localStorage.getItem('save')
var count = document.getElementById('count');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');

count.innerHTML = no

plus.addEventListener('click', function(){
	no = no + 1  ;
	console.log("Nomer Ke " + no);
	localStorage.setItem('save',no);
})

minus.addEventListener('click', function(){
	no = no -1 ;
	console.log("Nomer Ke " + no);
	localStorage.setItem('save',no);

})