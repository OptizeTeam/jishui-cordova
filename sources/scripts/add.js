var form = document.getElementById('new-recipe');

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
		location = 'index.html';
	});
	request.open('POST', API + '/recipe');
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
