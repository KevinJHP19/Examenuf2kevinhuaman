import { modelos } from './modelos.js'
import modeloPieza from './modeloPieza.js'

export default function nuevaPieza(){
    return(
        new modeloPieza(2,modelos.piezas[0].nombre,10,10,modelos.piezas[0].matriz)
    )
}