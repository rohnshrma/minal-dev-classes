import React from "react";
import ContactList from "./Card"
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="../../public/heading">My Contacts</h1>
      <div>
        <ContactList></ContactList>
      </div>
     
    </div>
  );
}

export default App;
