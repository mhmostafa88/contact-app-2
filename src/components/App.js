//this is the default functional component
import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const LOCAL_STORAGE_KEY
  //react hook useState
  const [contacts, setContacts] = useState([]);

  //gets 'contact' from the AddContact component
  const addContactHandler = (contact) => {
     console.log(contact);
     setContacts([...contacts, contact]);
   };

   useEffect(() => {
     localStorage.setItem()
   }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={ contacts }/>
    </div>
  );
}

export default App;
