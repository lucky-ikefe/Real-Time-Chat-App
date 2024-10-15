const WebSocket = require('ws');

const server = new WebSocket.Server({port: 8080});
console.log('WebSocket server running on ws://localhost:8080');

server.on('connection', (socket) => {
    console.log('Client Connected');

    socket.on('message', (message) => {
       
        const receivedMessage = message instanceof Buffer ? message.toString() : message;
        
        // Broadcast the message to all connected client
       server.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN){
            client.send(receivedMessage);
        }
       })
    });
    
    socket.on('close', () => {
        console.log('Client Disconnected');
    });
})

