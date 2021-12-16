//makes call to api and returns response
async function loadToDos() {
	const url = "https://jsonplaceholder.typicode.com/todos/";

	const response = await fetch(url);
	const jsonResponse = await response.json();
	return jsonResponse;
}

//receives data and filters out the number of arrays sent through API
async function modifyToDos() {
	const data = await loadToDos();
	const todos = await data;
	let filtered = todos.filter((item, index) => {
		return index < cardsStructure.length;
	});
	return filtered;
}

//add data to our HTML file
async function addApi() {
	const arr = await modifyToDos();
	let data = arr.map((values) => {
		return {
			title: values.title,
			id: values.id,
			completed: values.completed,
		};
	});
	data.map((item, i) => {
		cards.cardTitles[i].innerHTML = item.title;
		cards.numberId[i].innerHTML = item.id;
		item.completed
			? (cards.completed[i].innerHTML = "Completed ✅")
			: (cards.completed[i].innerHTML = "Due Soon 🚨");
	});
}

//HTML Structures for card components
const container = document.querySelector(".cards-container");
const cardsStructure = document.querySelectorAll(".card");
const cardTitles = document.querySelectorAll(".title-text");
const completed = document.querySelectorAll(".completed-text");
const numberId = document.querySelectorAll(".id");
const btn = document.querySelector(".btn");

//Made the Structures into an objet
const cards = {
	cardTitles: cardTitles,
	completed: completed,
	numberId: numberId,
};

//calling API functions
addApi();
