import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {

    firstName: '',
    lastName: ''

  }


  handleInputChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleForm = (evt) => {
    evt.preventDefault();
    axios.post('/user/saveme', {
       firstName:this.state.firstName,
       lastName:this.state.lastName
    })
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleForm}>
          <input
            type="text"
            name='firstName'
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name='lastName'
            onChange={this.handleInputChange}

          />
          <input type="submit" value="submit data" />
        </form>
      </div>
    );
  }
}

export default App;
