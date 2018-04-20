import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class Output extends Component{
  
  constructor(props){
    super(props);
    //add state to hold return from POSt call
    this.state = {
      student: null,
      filetoupload: '',
      uname: '',
      paNumber: '',
      input: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { filetoupload, uname, paNumber, input } = this.state;
    fetch('/api', {
      method: 'POST',
      body: JSON.stringify({
        filetoupload,
        uname,
        paNumber,
        input
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then((student)=>{
      this.setState({student});
    });
  }


  render(){
    const { filetoupload, uname, paNumber, input } = this.state;
    return(

        <div id="page2" className="output">
        <header className="App-header2">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to App2</h1>
        </header>
        <p className="output">
          Hello World  
        </p>
          
        <p> 
          
        </p>

      </div>
      
      );
  }
}


export default Output;
