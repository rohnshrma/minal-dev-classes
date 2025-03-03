function Heading() {
  var today = new Date().toLocaleDateString();
  var style = { background: "tomato", color: "#fff", padding: "1rem" };
  return <h1 style={style}>React App : {today}</h1>;
}

export default Heading;
