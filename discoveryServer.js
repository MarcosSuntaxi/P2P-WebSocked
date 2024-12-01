const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

const peers = new Set();

wss.on('connection', (ws) => {
    console.log('Nuevo nodo conectado');
    peers.add(ws);

    // Notificar a todos los nodos la nueva conexión
    ws.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`);
        peers.forEach(peer => {
            if (peer !== ws && peer.readyState === WebSocket.OPEN) {
                peer.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Nodo desconectado');
        peers.delete(ws);
    });
});

console.log('Servidor de descubrimiento corriendo en ws://localhost:8080');
