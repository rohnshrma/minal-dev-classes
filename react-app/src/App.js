import Card from "./Components/Card";
import Heading from "./Components/Heading";
import "./App.css";
import data from "./data";
import Cards from "./Components/Cards";

// react components are js functions returning html
function App() {
  console.log("App Running");
  return (
    <div id="App">
      <Heading />
      <p>this a paragraph</p>
      <Cards>
        {data.map((item) => (
          <Card
            key={item.id}
            superHeroName={item.superHeroName}
            realName={item.realName}
          />
        ))}
      </Cards>
    </div>
  );
}

export default App;
