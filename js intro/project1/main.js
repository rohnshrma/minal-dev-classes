import Task from "./task.js";
import * as api from "./fetch.js";
import * as hof from "./functions.js";

const numOfItemsToFetch = 20;

// var tasks = new Array();
// fetchTodos().then(
//     data => {
//         data.forEach(item => {
//             tasks.push(new Task(item.id,item.title,item.completed))
//         });
//         console.log(tasks)
//     }
// )

//Milestone 3 : Convert API response into an array of Task objects
var tasks2 = await api.fetchTodos(numOfItemsToFetch);
var taskArray = new Array();
tasks2.forEach((item) => {
  taskArray.push(new Task(item.id, item.title, item.completed));
});

//hof.displayTask(taskArray);
// console.log("--------------------------------")
hof.processTasks(hof.filterCompletedTasks, taskArray);
console.log("--------------------------------");
hof.processTasks(hof.extractTaskTitles, taskArray);
console.log("--------------------------------");
console.log(hof.totalCompletedTasks(taskArray));
