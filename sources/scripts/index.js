var recipeToDelete = null;

var request = new XMLHttpRequest();

request.addEventListener('load', function (response) {
	var recipes = JSON.parse(response.target.response);

	for (var i = 0; i < recipes.length; i++) {
		addRecipe(recipes[i].id, recipes[i].name);
	}
});
request.open('GET', API + '/recipe/list');
request.send();

function showPopup() {
	var popup = document.getElementById('delete-popup');

	popup.classList.add('open');
}

function closePopup() {
	var popup = document.getElementById('delete-popup');

	popup.classList.remove('open');
}

function addRecipe(id, name) {
	var listElementTemplate = document.getElementById('list-element-template'),
		listElement = listElementTemplate.cloneNode(true);

	listElement.id = '';

	listElement.getElementsByClassName('name')[0].innerText = name;
	listElement.getElementsByClassName('name')[0].href = 'details.html?id=' + id;
	listElement.getElementsByClassName('delete')[0].dataset.id = id;
	listElement.getElementsByClassName('delete')[0].addEventListener('click', function (e) {
		e.preventDefault();
		showPopup();
		recipeToDelete = e.target.parentNode.dataset.id;
	});

	document.getElementById('elements').appendChild(listElement);
}

function deleteRecipe() {
	var request = new XMLHttpRequest();

	request.addEventListener('load', function (response) {
		location.reload();
	});
	request.open('DELETE', API + '/recipe/' + recipeToDelete);
	request.send();
}
