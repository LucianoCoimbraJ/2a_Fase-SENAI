import { useState } from 'react'
import './App.css'
import Dragao from './pages/Dragao'
import Home from './pages/Home'
import NaoSei from './pages/NaoSei'
import Render from './pages/Render'


function App() {
  const [pagina, setPagina] = useState()
  function mostrarDragao (){
    setPagina(<Dragao />)
  }
  function mostrarNaoSei (){
    setPagina(<NaoSei />)
  }
  function mostrarHome (){
    setPagina(<Home />)
  }
  function mostrarRender (){
    setPagina(<Render />)
  }
  return (
    <>
    <center>
      <div>
        <nav>
          <button onClick={ mostrarDragao }>Dragão</button>
          <button onClick={ mostrarNaoSei }>NãoSei</button>
          <button onClick={ mostrarHome }>Home</button>
          <button onClick={ mostrarRender}>Render</button>
        </nav>
        {pagina}
      </div>
      </center>

    </>
  )
}

export default App
