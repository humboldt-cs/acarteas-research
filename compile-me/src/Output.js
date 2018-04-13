import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App2 extends Component{
  render(){
    return(

        <div className="App2">
        <header className="App-header2">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to App2</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      
      );
  }
}


export default App2;
