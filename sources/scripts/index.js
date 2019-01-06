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

// Tworzę funkcję addRecipe, która przyjmuje dwa parametry id i name
// W funkcji tworzę zmienną o nazwie listElementTemplate, do której przypisuję
// znaleziony w dokumencie element o id list-element-template.
// Następnie tworzę kolejną zmienną i za pomocą cloneNode klonuję zmienną
// listElementTemplate, do której jest przypisane element o id list-element-template.

function addRecipe(id, name) {
	var listElementTemplate = document.getElementById('list-element-template'),
		listElement = listElementTemplate.cloneNode(true);

// Nasz sklonowany element posiada teraz w sobie id, które należałoby usunąć.
// Ze względu na to, że id nie może się w kodzie powtarzać oraz, że przy
// kolejnym sklonowaniu zamiast skorzystać z kodu przeznaczonego na template wziąłby
// element przed chwilą stworzony. Aby temu zapobiec możemy wziąć ze zmiennej id
// i przypisując do niej pustego stringa.

	listElement.id = '';

// Ta linia służy to znalezienia klasy name w tym konkretnym sklonowanym elemencie
// i zmodyfikowania (w tym przypadku dodania, bo template jest pusty) zawartego
// w niej tekstu. Innymi słowy anchorowi o klasie name wyświetlomy tekst.

	listElement.getElementsByClassName('name')[0].innerText = name;

// Ta linia natomiast robi to co poprzednia z wyjątkiem, że zamiast modyfikacji tekstu
// modyfikujemy zawartość hrefa. Przypisujemy do niej adres dotychczasowy details.html
// i dopisujemy jeszcze ?id oraz za pomocą konkatenacji id. Służy to temu, żeby
// po kliknięciu w element o id np. 4 użytkownik przeszedł do szczegółów elementu o id 4.

	listElement.getElementsByClassName('name')[0].href = 'details.html?id=' + id;
	listElement.getElementsByClassName('delete')[0].dataset.id = id;
	listElement.getElementsByClassName('delete')[0].addEventListener('click', function (e) {
		e.preventDefault();
		showPopup();
		recipeToDelete = e.target.parentNode.dataset.id;
	});

// Ta linia mówi nam, że wyszukujemy w dokumencie element o id elements a następnie
// wstawiamy określony węzeł listElement na koniec listy rodzica. Rodzicem w tym przypadku
// jest id elements.

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