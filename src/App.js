import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import MiComponente from './components/MiComponente';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6 , EventosES7, MasSobreEventos}  from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import PracticeHooks from './components/PracticeHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
import Estilos from './components/Estilos';
import ContactForm from './components/ContactForm';

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
                  <hr/>
                  <RenderizadoCondicional/>
                  <hr/>
                  <RenderizadoElementos />
                  <hr />
                  <EventosES6 />
                  <hr />
                  <EventosES7 />
                  <hr />
                  <MasSobreEventos />
                  <Padre />
                  <CicloVida />
                  < AjaxApis />
                  <ContadorHooks />
                  <PracticeHooks estado={"noche"}/>
                  <hr />
                  <ScrollHooks />
                  <hr />
                  <RelojHooks />
                  
                  <hr />
                  <Referencias />
                  <hr />
                  <Formularios />
                  <hr />
                  <hr />
                  <hr />
                  <Estilos />
                  <hr />
                  <hr />
                  <hr />
                  <ContactForm />
                  
                  
      </section>
      </header>
    </div>
  );
}

export default App;
