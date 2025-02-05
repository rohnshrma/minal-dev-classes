fetch("https://jsonplaceholdertypicode.com/todos/1")
  .then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log("Error", err);
  });
