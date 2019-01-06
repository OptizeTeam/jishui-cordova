var urlParams = new URLSearchParams(location.search);
var id = urlParams.get('id');

var request = new XMLHttpRequest();

request.addEventListener('load', function (response) {
	var recipe = JSON.parse(response.target.response);

	document.getElementsByTagName('h2')[0].innerText = recipe.name;

	if (recipe.description !== null) {
		document.getElementsByClassName('description')[0].innerHTML = markdown.toHTML(recipe.description);
	}
	else {
		document.getElementsByClassName('description')[0].innerHTML = '<p>Wybrany przepis nie posiada jeszcze opisu.</p>';
	}
});
request.open('GET', 'http://10.42.0.20:3000/recipe/' + id);
request.send();
