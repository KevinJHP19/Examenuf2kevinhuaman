import { useState, useEffect } from 'react'
import { modelos } from '../lib/modelos.js';
import Panel from '../component/Panel.jsx'
import Pieza from '../component/Pieza.jsx'
import nuevaPieza from '../lib/nuevaPieza.js'

// Definir la clase Fantasma
class Fantasma {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.estado = 'vivo';
    }

    generaPosicionAleatoria(maxX, maxY) {
        this.x = Math.floor(Math.random() * maxX);
        this.y = Math.floor(Math.random() * maxY);
    }
}

export default function Juego() {

    const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);
    const [piezaActual, setpiezaActual] = useState(nuevaPieza());
    const [fantasmas, setFantasmas] = useState(() => {
        const maxX = modelos.matriz.length;
        const maxY = modelos.matriz[0].length;
        const nuevosFantasmas = [];
        for (let i = 0; i < 5; i++) {
            const fantasma = new Fantasma();
            fantasma.generaPosicionAleatoria(maxX, maxY);
            nuevosFantasmas.push(fantasma);
        }
        return nuevosFantasmas;
    });

    const [comecocos, setComecocos] = useState({ x: 0, y: 0 });

    const handleKeyDown = (event) => {
        setComecocos(prev => {
            let newX = prev.x;
            let newY = prev.y;

            switch (event.key) {
                case 'ArrowUp':
                    newY = Math.max(0, prev.y - 1);
                    break;
                case 'ArrowDown':
                    newY = Math.min(modelos.matriz.length - 1, prev.y + 1);
                    break;
                case 'ArrowLeft':
                    newX = Math.max(0, prev.x - 1);
                    break;
                case 'ArrowRight':
                    newX = Math.min(modelos.matriz[0].length - 1, prev.x + 1);
                    break;
                default:
                    break;
            }

            return { x: newX, y: newY };
        });
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const pintarPieza = () => {
        piezaActual.matriz.forEach((fila, filaIndex) => {
            fila.forEach((celda, celdaIndex) => {
                arrayCasillas[piezaActual.fila + filaIndex][piezaActual.columna + celdaIndex] = celda;
            });
        });
    };

    console.log(piezaActual);
    if (pintarPieza()) {
        setArrayCasillas(arrayCasillas);
    }
    console.log(fantasmas);
    console.log(comecocos);

    return (
        <div id='intro' className='text-center p-5 bg-secondary text-white' style={{ fontSize: '1.5em' }}>
            <Panel modelos={arrayCasillas} />
            <br /> <br />
            <Pieza modelos={modelos.piezas[0].matriz[0]} />
            <br />
            <br />
            <br />
            {fantasmas.map((fantasma, index) => {
                return <div key={index}>Fantasma {index + 1}: ({fantasma.x}, {fantasma.y}) - Estado: {fantasma.estado}</div>
            })}
            <div>Comecocos: ({comecocos.x}, {comecocos.y})</div>
        </div>
    );
}