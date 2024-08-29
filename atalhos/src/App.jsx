import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <h1>Atalhos do VS Code</h1>
    <h2>Coisas legais para facilitar tua vida</h2>
    <p>
      Comando para o emmet da ul: ul>li*6
    </p>

    <ul>
        <li>Atalho: alt + z para quebrar automática de linha.</li>
        <li>atalho: alt + clique esquerdo para adicionar novos cursores na tela</li>
        <li>Atalho: ctrl + shift + k para excluir uma linha inteira</li>
        <li>Atalho: ctrl + ; para comentar/descomentar</li>
        <li>Atalho: windows + . abre teclado de emojis</li>
        <li>Atalho: alt + seta cima/baixo para mover uma linha/bloco</li>
        <li>Atalho: alt + shift + seta cima/baixo copia uma linha atual ou bloco selecionado</li>
        <li>Atalho: ctrl + j ou ctrl + ' abre/fecha o terminal</li>      
      </ul>
      <p>Para esfregar vários cursores pela tela (digitar várias coisas ao mesmo tempo): Clica com a rodinha e esfrega ela pela teclado.</p>

      <p>Extensões:</p>
      <ul>
        <li>ES7 React/Redux/GraphQL/React-Native snippets</li>
        <li>Auto Rename Tag</li>
        <li>Color Highlight</li>
        <li>Power Mode</li>
        <li>VS CODE PETS</li>
      </ul>
    </>
  )
}

export default App
