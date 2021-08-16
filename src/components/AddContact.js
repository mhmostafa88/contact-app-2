import React from 'react';

class AddContact extends React.Component {
    //render() is only required in class components ..
    //..and is responsible for describing the view to be rendered to the browser window
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;