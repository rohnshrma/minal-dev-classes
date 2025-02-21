// fetch("https://jsonplaceholdertypicode.com/todos/1")
//   .then((response) => {
//     response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

// function fetchWeather(city) {
//   var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ed1a8944ae36bde087adc8f67d0f04a&units=metric`;
//   fetch(url)
//     .then((response) =>
//       response
//         .json()
//         .then((data) =>
//           console.log(
//             `Temperature of ${data.name}\nTemperature : ${data.main.temp}\nDescription : ${data.weather[0].description}\nFeels Like : ${data.main.feels_like}`
//           )
//         )
//     )
//     .catch((err) => console.error(err))
//     .finally(() => console.log("Request Completed!"));
// }

// fetchWeather("Delhi");

// Fetch API:
// The fetch() method is used to make HTTP requests and returns a Promise that resolves to the response of the request.
// •	Promise Handling:
// •	.then(response => {...}): Handles the resolved response.
// •	response.json(): Extracts JSON data from the response.
// •	.catch(err => {...}): Catches any errors that may occur during the fetch request.
// •	Chaining Promises:
// •	The first .then() processes the raw response.
// •	The second .then() (inside the first one) extracts JSON data.
// •	The .catch() handles any errors in the fetch process.

// creating a promise

// var myPromise = new Promise((resolve, reject) => {
//   var age = parseInt(prompt("Enter your age : "));
//   setTimeout(() => {
//     if (age >= 18) resolve("Eligible");
//     else reject("Not Eligible");
//   }, 5000);
// });

// var myPromise = (age) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (age >= 18) resolve("Eligible");
//       else reject("Not Eligible");
//     }, 5000);
//   });
// };

// myPromise(34)
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

function fetchWeather(city) {
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ed1a8944ae36bde087adc8f67d0f04a&units=metric`;
  return new Promise((res, rej) => {
    var request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        var data = JSON.parse(request.responseText);
        res(data);
      }
      if (request.readyState === 4 && request.status !== 200) {
        rej(`Could fetch weather of ${city}`);
      }
    });

    request.open("GET", url);

    request.send();
  });
}

// fetchWeather("gurgaon")
//   .then((data) =>
//     console.log(
//       `Temperature of ${data.name}\nTemperature : ${data.main.temp}\nDescription : ${data.weather[0].description}\nFeels Like : ${data.main.feels_like}`
//     )
//   )
//   .catch((err) => console.error(err));

// fetchWeather("tokyo")
//   .then((data) =>
//     console.log(
//       `Temperature of ${data.name}\nTemperature : ${data.main.temp}\nDescription : ${data.weather[0].description}\nFeels Like : ${data.main.feels_like}`
//     )
//   )
//   .catch((err) => console.error(err));

var handleRequest = async (city) => {
  try {
    var data = await fetchWeather(city);
    console.log(
      `Temperature of ${data.name}\nTemperature : ${data.main.temp}\nDescription : ${data.weather[0].description}\nFeels Like : ${data.main.feels_like}`
    );
  } catch (err) {
    console.log("err =>", err);
  }
};

// handleRequest("delhi");
// handleRequest("delhi");

var handleData = async (url) => {
  try {
    var response = await fetch(url);
    var data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

handleData("https://jsonplaceholder.typicode.com/todos/1");

// ✅ fetch API – Used to make HTTP requests and handle responses.
// ✅ Promise Chaining – .then() for handling successful responses, .catch() for errors.
// ✅ XMLHttpRequest – An older method of making HTTP requests.
// ✅ Async/Await – Simplifies working with promises and makes code more readable.
// ✅ Promise Handling – Demonstrates how to create and resolve/reject promises.
