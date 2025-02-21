var request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //   console.log(
  //     request.readyState,
  //     request.status,
  //     JSON.parse(request.responseText)
  //   );
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  }
  if (request.readyState === 4 && request.status !== 200) {
    console.error("Something went wrong");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

request.send();

// 0: unsent
// 1: open function called
// 2: send function called
// 3: data download (partial)
// 4: complete (fully available)

// function fetchWeather(city, cb) {
//   var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ed1a8944ae36bde087adc8f67d0f04a&units=metric`;
//   var request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       var data = JSON.parse(request.responseText);
//       cb(data, undefined);
//     }
//     if (request.readyState === 4 && request.status !== 200) {
//       cb(undefined, `Could fetch weather of ${city}`);
//     }
//   });

//   request.open("GET", url);

//   request.send();
// }

// function HandleData(data, err) {
//   if (data) {
//     console.log(
//      `Temperature of ${data.name}\nTemperature : ${data.main.temp}\nDescription : ${data.weather[0].description}\nFeels Like : ${data.main.feels_like}`
//     );
//   }

//   if (err) {
//     console.error(err);
//   }
// }

// fetchWeather("gurgaon", HandleData);
// fetchWeather("tokyo", HandleData);
// fetchWeather("tokysbvjsbo", HandleData);

// temp
// desc
// city
// feels like

// •	XMLHttpRequest Object
// •	Used to make HTTP requests (GET, POST, etc.).
// •	Provides methods like open(), send(), and addEventListener().
// •	Handling readyState Changes
// •	We check readyState === 4 to ensure the request is completed.
// •	We check status === 200 to confirm a successful request.
// •	Callback Function (cb)
// •	cb(data, undefined): Called when the request is successful.
// •	cb(undefined, errorMessage): Called when an error occurs.
// •	Fetching Weather Data
// •	The OpenWeatherMap API is used with an API key.
// •	JSON response is parsed and logged.
