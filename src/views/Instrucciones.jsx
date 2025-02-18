export default function Instrucciones() {
    return(
        <div className="container mt-4">
        <h1>Instrucciones</h1>
        
        <ol>
            <li>Vista principal</li>
        
            <ul>
                <li>Una cuadrícula de 20x20.</li>
                <li>Un Comecocos que comienza en el centro de la cuadrícula.</li>
                <li>Cinco fantasmas posicionados aleatoriamente en la cuadrícula</li>
                <li>El jugador puede mover al Comecocos utilizando las flechas del teclado.</li>
                <li>Cuando el Comecocos se encuentra en la misma posición que un fantasma, este es eliminado y se suma un punto al marcador.</li>
            </ul>
            <li>Vista de instrucciones</li>
            <ul>
                <li>Explica cómo jugar y las reglas del juego, incluyendo el nuevo contador de puntos.</li>
            </ul>
            <li>Puntos adicionales</li>
            <ul>
                <li>Mostrar un contador de puntos en la parte superior de la vista principal.</li>
                <li>El juego termina cuando no quedan fantasmas en la cuadrícula.</li>
            </ul>
        </ol>
        </div>
    )
}