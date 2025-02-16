//Milestone 4 : Display Tasks in Console
export function displayTask(arr1) {
  console.log("*****DISPLAYING TASKS*****");
  arr1.forEach((item) => {
    item.completed = item.completed ? "\u2713" : "\u2717";
    console.log(item);
  });
}

//Milestone 5: Implement Higher-Order Functions (HOFs)
export function processTasks(callBack, listOfTasks) {
  callBack(listOfTasks).forEach((item) => console.log(item));
}

export function filterCompletedTasks(arr1) {
  return arr1.filter((item) => item.completed);
}

export function extractTaskTitles(arr1) {
  return arr1.map((item) => item.title);
}

export function totalCompletedTasks(arr1) {
  return arr1.reduce((acc, currItem) => {
    acc = currItem.completed ? acc + 1 : acc;
    return acc;
  }, 0);
}
