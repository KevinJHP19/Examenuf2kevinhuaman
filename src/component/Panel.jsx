import colorPieza from "../lib/colorPieza.js"
export default function Panel({ modelos }){
    
    return(
        <div className='panel'>
            {modelos.map((fila, filaIndex) => (
                <div key={filaIndex} className='row'>
                    {fila.map((celda, celdaIndex) => (
                        <div key={celdaIndex} 
                        className={`col border ${colorPieza(celda)}`}>
                            {celda}
                        </div>
                    ))}
                </div>
            ))}
        </div>

    )
    
}