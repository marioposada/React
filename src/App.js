import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';

function App() {
  let auth=true
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          { auth? "El usuario esta lfffff": "El ususario no esta logjeado"}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
            <Componente msg="Hola soy un componente funcional desde una prop"/>
      </section>
    </div>
  );
}

export default App;
