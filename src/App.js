import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
     super();

     this.state = {
       repetidor:""
     }
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.obtenerValor.bind(this)} />
        <p className="repeater">{this.state.repetidor}</p>
      </div>
    );
  }

  obtenerValor(e){
      this.setState({
        repetidor: e.target.value
      })
  }
}

export default App;
