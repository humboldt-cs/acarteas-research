import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <form action = "filetoupload" method = "post" enctype="multipart/form-data">
          <input type = "file" name = "filetoupload" />
          <br />
          Student Name: <input type="text" name="Student Name" id="Stu_name" placeholder = "Eric Kinne"/>
          <br />
          PA Number: <input type="text" name="PA Number" id="pa_name" placeholder = "12"/>
          <br />
          Input: <input type="text" name="Input" id="input" placeholder = "1 2 4 17 32"/>
          <br />
          <input type="submit" value="Submit" id="submit"/>
        </form>


      </div>
    );
  }
}

export default App;
