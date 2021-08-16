import React from 'react';

class AddContact extends React.Component {

    //set an initially empty state object
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory!");
            return;
        }

        this.props.addContactHandler(this.state);
        //why this the following line not cause the console log to show empty strings for name and email
        this.setState({name:"", email: ""});
        // console.log(this.state);

    }

    //render() is only required in class components ..
    //..and is responsible for describing the view to be rendered to the browser window
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"
                        value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"
                        value={this.state.email}

                        // setState({ stateName : updatedStateValue })
                        onChange={ (e) => this.setState({email: e.target.value}) } />

                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;