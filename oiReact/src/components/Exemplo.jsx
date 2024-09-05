import { useState } from "react"
function Exemplo() {

    const [resultado, setResultado] = useState(0)

    function aumentar(){
        setResultado(resultado  + 1)

    }

    function diminuir(){
        setResultado(resultado - 1)
    }
    
    

    return (
        <div>
            <button onClick={diminuir}>-</button>
            <button onClick={aumentar}>+</button>
            {resultado}
        </div>
    )
} 

export default Exemplo