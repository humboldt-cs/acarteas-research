import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//var express = require('express');
//var app = express();
//var router = express.Router();
//var bodyParser = require('body-parser');

//router.use(bodyParser.urlencoded({ extended: true }));

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

        <form action = "api" method = "post" enctype="multipart/form-data">
          <input type = "file" name = "filetoupload" />
          <br />
          Student Name: <input type="text" name="uname" id="stu_name" placeholder = "Eric Kinne"/>
          <br />
          PA Number: <input type="text" name="paNumber" id="pa_name" placeholder = "12"/>
          <br />
          Input: <input type="text" name="input" id="inputValues" placeholder = "1 2 4 17 32"/>
          <br />
          <input type="submit" value="Submit" id="submit"/>
        </form>


      </div>
    );
  }
}

export default App;
