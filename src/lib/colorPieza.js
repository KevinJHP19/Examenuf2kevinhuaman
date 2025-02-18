export default function colorPieza(pieza){
    switch(pieza){
        case '1':
            return 'bg-primary';
        case '2':
            return 'bg-warning rounded-5';
        case '3':
            return 'bg-secondary';
        
        default:
            return 'Unknown';
    }
}