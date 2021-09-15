//this is the default functional component
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { uuid } from 'uuidv4';

function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  //react hook useState
  const [contacts, setContacts] = useState([]);

  //gets 'contact' from the AddContact component
  const addContactHandler = (contact) => {
     //never directly set the state yourself, always use the state setter function (in this case; setContacts)
     // ... is used for bringing in the state that already existed before (other contacts)
     setContacts([...contacts, {id: uuid(), ...contact }]);
   };

   const removeContactHandler = (id) => {
     const newContactList = contacts.filter((contact) => {
       return contact.id !== id;
     });
     setContacts(newContactList);
   };
   //pass an empty array so that it runs only on 'mount' and clean up on 'unmount'
   useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts);
  }, []);

   // when the value of [contacts] array changes, the useEffect hook will render the component again
   useEffect(() => {
     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
   }, [contacts]);

   //getting contacts from local storage after refreshing. Use the key (it has 'contacts' as value), then you need..
   //..to store it in a variable. Then use the setState function to update the state with the variable's value 


  return (
    <div className="ui container">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact 
          render={(props) => (
            <ContactList {...props} contacts={ contacts } getContactId={ removeContactHandler }/>
            )} 
          />
          <Route path="/add" render={(props) => (
            <AddContact {...props} addContactHandler={addContactHandler}/>
          )}
            />
        </Switch>
      </Router>
      {/* <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={ contacts } getContactId={ removeContactHandler }/> */}
    </div>
  );
}

export default App;
