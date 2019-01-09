// Wyświetlanie elementów na formularzu

var urlParams = new URLSearchParams(location.search);
var id = urlParams.get('id');

var request = new XMLHttpRequest();

request.addEventListener('load', function (response) {
	var recipe = JSON.parse(response.target.response);

	document.getElementsByClassName('back')[0].href = 'details.html?id=' + id;
	document.getElementById('name').value = recipe.name;
	document.getElementById('description').value = recipe.description;
	simplemde.value(recipe.description);
});
request.open('GET', API + '/recipe/' + id);
request.send();

// Edycja formularza

var form = document.getElementById('edit-recipe');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	var recipeName = document.getElementById('name').value;
	var recipeDescription = simplemde.value();

	var recipe = {
		name: recipeName,
		description: recipeDescription
	};

	var request = new XMLHttpRequest();

	request.addEventListener('load', function (response) {
		location = 'details.html?id=' + id;
	});
	request.open('PUT', API + '/recipe/' + id);
	request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	request.send(JSON.stringify(recipe));
});

var simplemde = new SimpleMDE({
	element: document.getElementById('description'),
	spellChecker: false,
	toolbar: [
		'bold',
		'italic',
		'heading-3',
		'unordered-list',
		'ordered-list'
	]
});
