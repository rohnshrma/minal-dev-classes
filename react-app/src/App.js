import Card from "./Components/Card";
import Heading from "./Components/Heading";
import "./App.css";
import data from "./data";
import Cards from "./Components/Cards";
import Counter from "./Components/Counter";

// react components are js functions returning html
function App() {
  console.log("App Running");
  return (
    <div id="App">
      <Heading />
      <p>this a paragraph</p>
      {/* <Cards data={data} /> */}
      <Counter />
    </div>
  );
}

export default App;
