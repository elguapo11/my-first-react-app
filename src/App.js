
import React, {Component} from "react"; 
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor () {
    super(); 

    this.state = {
      message: "Hello "
    }; 
  }


handleChange(value) {
  this.setState({ message: value }); 
}

render() {
  return (
    <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type="text"/>
      <p>{this.state.message}</p>   
    </div>

  )
}

}


export default App;
