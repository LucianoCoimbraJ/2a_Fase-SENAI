import { useState } from "react"
import './Media.css'

function Media() {
    const [resultado, setResultado] = useState()
    function calcularMedia(){
      let nota1 = Number(prompt('Digite o 1° número'))
      let nota2 = Number(prompt('Digite o 2° número'))
      let media = (nota1 + nota2) / 2
      setResultado(media)
    }
  return (
    <div className="Media-Container">
        <h2>Exercício para calcular média de 2 números</h2>
        <button onClick={calcularMedia}>Calcular</button>
      

        Média: {resultado}
    </div>
    )
}

export default Media
