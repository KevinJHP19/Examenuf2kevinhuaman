import { useState, useEffect } from 'react'
import { modelos } from '../lib/modelos.js';
import Panel from '../component/Panel.jsx'
export default function Juego() {

    const [arrayCasillas, setArrayCasillas] = useState(modelos.matriz);
    
    return(
        <div id='intro' className='text-center p-5 bg-secondary text-white' style={{fontSize:'1.5em'}}>
            <Panel modelos={arrayCasillas} />
        </div>
    )
}