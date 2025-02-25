async function getWeather(cityName) {
  try {
    var response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3b56d319b1afb3754254db074228eaa5&units=metric`
    );
    var resp = await response.json();
    return resp;
  } catch (err) {
    console.log("There is an error in fetching data");
    console.log(err);
  }
}

document
  .getElementById("weatherForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // do not actually submit the page to the server
   
    var input = getInput()
    console.log(input);

    getWeather(input)
      .then((data) => { 
        if (document.getElementById("table")) {
            document.getElementById("table").remove();
        } 

        if (document.getElementById("cityError")) {
            let errorBox = document.getElementById("cityError");
            errorBox.innerText = "";
        } 

        let table = document.createElement("table");
        table.id = "table"
        
        insertRow(table,"Name",data.name)
        insertRow(table,"Description",data.weather[0].description)
        insertRow(table,"Feels Like",data.main.feels_like)
        
        // Append the table to the container
        const container = document.getElementById('tableContainer');
        container.appendChild(table);

        console.log(data) 
        })
      .catch((err) => {
        console.log(err)
        let errorBox = document.getElementById("cityError");
        errorBox.innerText = "INVALID CITY";
        errorBox.style.display = "block"; 
      });
  });

function getInput() {
  var input = document.getElementById("city").value;
  return input;
}

function insertRow(table,title,data) {
    row = table.insertRow();
    row.insertCell("Cell1").textContent = data
    row.insertCell("Cell2").textContent = title
    table.appendChild(row)
}