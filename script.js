const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
var str = '';
let results = [];
var inputVal = input.value;


const fruit = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	str = input.value.toLowerCase();
	if (str) {
	results = fruit.filter((word) => word.toLowerCase().includes(str));
	results = results.map(item => `<li>${item}</li>`)
	}
		
	showSuggestions(results);
}	

function searchHandler(e) {
	e.preventDefault();
	search();

}

function showSuggestions(results) {
	const listItems = results.join('');
	suggestions.innerHTML = listItems;
	
}
function useSuggestion(e) {
	
	e.preventDefault();
	input.value = e.target.innerHTML;
	suggestions.innerHTML = "";
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);