import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import MiComponente from './components/MiComponente';
import Estado from './components/Estado';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <MiComponente texto="Nuevo componente"/>
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
            <Componente msg="Hola soy un componente funcional desde una prop"/>
            <hr/>
            <Propiedades 
            cadena="Esto es una cadena de texto" 
            numero = {19}   
            booleano= {true}  
            array = {[1,2,3]} 
            objeto = {{nombre:"Mario", correo:"mposada@brfsa.com.ar"}}    
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elementoReact</i>} 
            componenteReact={<Componente msg="Soy un componente pasado como Props"/>}            
                  />
                  <hr/>
                  <Estado />
                  
      </section>
      </header>
    </div>
  );
}

export default App;
