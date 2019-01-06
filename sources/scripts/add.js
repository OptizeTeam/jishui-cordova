var form = document.getElementById('new-recipe');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	var recipeName = document.getElementById('name').value;
	var recipeDescription = document.getElementById('description').value;

	var recipe = {
		name: recipeName,
		description: recipeDescription
	};

	var request = new XMLHttpRequest();

	request.addEventListener('load', function (response) {
		location = 'index.html';
	});
	request.open('POST', 'http://10.42.0.20:3000/recipe');
	request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	request.send(JSON.stringify(recipe));
});
