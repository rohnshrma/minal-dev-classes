//Milestone 3 : Use fetch() to get tasks
export async function fetchTodos(numOfItems) {
  try {
    var response = await fetch("https://jsonplaceholder.typicode.com/todos");
    var resp = await response.json();
    return resp.slice(0, numOfItems);
  } catch (err) {
    console.log("There is an error in fetching data");
    console.log(err);
  }
}
