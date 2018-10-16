var no = parseInt(localStorage.getItem('save'));
if(isNaN(no)){
	no = 0;
}
var count = document.getElementById('count');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');

count.innerHTML = no

plus.addEventListener('click', function(){
	no = no + 1  ;
	console.log("Nomer Ke " + no);
	count.innerHTML = no
	localStorage.setItem('save',no);
})

minus.addEventListener('click', function(){
	no = no -1 ;
	console.log("Nomer Ke " + no);
	count.innerHTML = no
	localStorage.setItem('save',no);

})