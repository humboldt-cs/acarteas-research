import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class output extends Component{
  render(){
    return(

        <div id="page2" className="output">
        <header className="App-header2">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to App2</h1>
        </header>
        <p className="output">
          Hello World
          
        </p>
      </div>
      
      );
  }
}


export default output;
