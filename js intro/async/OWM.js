function getWeather(cityName) {
  var req = new XMLHttpRequest();

  // var url =
  //   `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3ed1a8944ae36bde087adc8f67d0f04a&units=metric`;

  var url =
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3b56d319b1afb3754254db074228eaa5&units=metric`;
     

  req.open("GET", url);

  req.send();

  req.addEventListener("readystatechange", () => {
    if (req.readyState == 4 && req.status == 200) {
      var resp = JSON.parse(req.response);
      console.log(resp.name);
      console.log(resp.weather[0].description);
      console.log(resp.main.feels_like);
    }
  });
}


getWeather("Delhi")
getWeather("London")


// fetch("https://randomuser.me/api/")
//   .then((resp) => {
//     resp
//       .json()
//       .then((data) =>
//         console.log(data.results[0].gender, data.results[0].name.first)
//       );
//   })
//   .catch((err) => {
//     console.log("Error :::", err);
//   });


//   var randomdata = async(url) => {

//     try {
//         var response = await fetch(url);
//         var data = await response.json();
//         console.log(data)
//         console.log(data.results[0].gender)
//         console.log(data.results[0].name.first)
//         console.log(data.results[0].name.last)
//         console.log(data.results[0].location.country)
//     } catch(err) {
//         console.log(err)
//     }
//   };


  //randomdata("https://randomuser.me/api/")


