async function loadToDos() {
	const url = "https://jsonplaceholder.typicode.com/todos/";

	const response = await fetch(url);
	const jsonResponse = await response.json();
	return jsonResponse;
}

async function modifyToDos() {
	const data = await loadToDos();
	console.log(data);
}

modifyToDos();
