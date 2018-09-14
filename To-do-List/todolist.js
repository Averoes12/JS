var input = document.getElementById('input');
var button = document.getElementById('button-addon2');
var list = document.getElementById('list');

var save = localStorage.getItem('hobby')
	list.innerHTML = save

button.addEventListener('click', function () {
	var hobby = input.value
	list.innerHTML = list.innerHTML + '<li class="list-group-item">' + hobby;
	input.value = "";
	localStorage.setItem('hobby',list.innerHTML);
});