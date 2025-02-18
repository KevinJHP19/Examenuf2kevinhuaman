
import colorPieza from '../lib/colorPieza.js';

export default function Pieza({ modelos }) {
    return (
        <div className='pieza'>
            {modelos.map((fila, filaIndex) => (
                <div key={filaIndex} className='row'>
                    {Array.isArray(fila) ? fila.map((celda, celdaIndex) => (
                        <div key={celdaIndex} className={`col border ${colorPieza(celda)}`}>
                        {celda}
                    </div>
                    )) : null}
                </div>
            ))}
        </div>
    );
}
