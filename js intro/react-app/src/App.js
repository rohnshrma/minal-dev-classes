import Card from "./Components/Card";
import Heading from "./Components/Heading";
import "./App.css";

// react components are js functions returning html
function App() {
  console.log("App Running");
  return (
    <div id="App">
      <Heading />
      <p>this a paragraph</p>
      <main>
        <Card superHeroName="spiderman" realName="peter parker" />
        <Card superHeroName="superman" realName="clark kent" />
        <Card superHeroName="batman" realName="bruce wayne" />
      </main>
    </div>
  );
}

export default App;
