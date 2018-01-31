import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BootstrapTableAsComponent from './BootstrapTableAsComponent';

const products = [
  {id: 1, name: 'Zapato', color: 'rojo', price: 200},
  {id: 2, name: 'Zapato amarillo', color: 'verde', price: 500},
  {id: 3, name: 'Zapato', color: 'rosado', price: 250},
  {id: 4, name: 'Zapato amarillo', price: 350},
  {id: 5, name: 'Zapato verde', price: 200}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BootstrapTableAsComponent> 
          data={products}  
          <table>
            <tr isKey={true} dataField="name" showField="Name"/>
            <tr dataField="color" showField="Color"  />
          </table> 
        </BootstrapTableAsComponent>
      </div>
    );
  }
}

export default App;
