var list;
var item;

var createList = function (ev) {
	
	
	list = document.getElementById('listy'); 
	
	item = document.createElement('li');
	
	var theValue = document.getElementById('text').value;
	
	
	if (theValue) { 
		item.innerHTML = theValue; 
		list.appendChild(item);
	}	

};

document.getElementById('button').addEventListener('click', createList, false);


var removeActiveClass = function () {
	var uls = document.getElementsByTagName('ul');
	var totalUls = uls.length;
	
	for (var i = 0; i < totalUls; i++ ) {
		ul[i].className = 'list';
	}
}


document.documentElement.addEventListener('click', function (ev) {
	if (ev.target.tagName == 'UL') {
		removeActiveClass();
		ev.target.className = 'list active';
		list = ev.target;
	}
}, false);




