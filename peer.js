const WebSocket = require('ws');

// Conectar al servidor de descubrimiento
const serverUrl = 'ws://localhost:8080';
const ws = new WebSocket(serverUrl);

ws.on('open', () => {
    console.log('Conectado al servidor de descubrimiento');
});

ws.on('message', (message) => {
    console.log(`Mensaje recibido: ${message}`);
});

// Enviar mensajes al servidor
process.stdin.on('data', (data) => {
    const message = data.toString().trim();
    ws.send(message);
    console.log(`Mensaje enviado: ${message}`);
});
