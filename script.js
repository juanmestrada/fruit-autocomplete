const input = document.querySelector('#fruit');
const suggestionContainer = document.querySelector('.suggestions');
const suggestions = document.querySelector('.suggestions ul');
const searchIcon = document.querySelector('.fa-magnifying-glass').outerHTML;

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {

	let results = fruit.filter(el => {
		return el.toLowerCase().includes(str.toLowerCase()) 
	});
	
	return results;
}

function searchHandler(e) {
	
	let inputVal = input.value;

	if(inputVal){
		suggestionContainer.classList.add("active");
		showSuggestions(search(inputVal), input.value);
	} else{
		suggestionContainer.classList.remove("active");
		suggestions.innerHTML = "";
	}

}

function showSuggestions(results, inputVal) {

	let suggestionList = results.map(el => {
		return "<li>" + searchIcon + el + "</li>";
	}).join("");
	
	if(results.length){
		suggestions.innerHTML = suggestionList;
	} else{
		suggestions.innerHTML = "<li>" + searchIcon + inputVal + "</li>";
	}

}

function useSuggestion(e) {

	let clickSuggestion = e.target.innerText;
	
	if(e.target.nodeName === "LI"){
		input.value = clickSuggestion;
	} else if(e.target.nodeName === "svg"){
		input.value = e.target.parentElement.childNodes[1].nodeValue;
	}

	suggestionContainer.classList.remove("active");
	suggestions.innerHTML = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);