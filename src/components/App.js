//this is the default functional component
import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contacts = [
    {
      id:"1",
      name:"mahmoud",
      email:"mahmoud@react.com",
    },
    {
      id:"2",
      name:"Andreea",
      email:"Andreea@react.com",
    }
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={ contacts }/>
    </div>
  );
}

export default App;
