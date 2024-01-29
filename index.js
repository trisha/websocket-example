// https://github.com/websockets/ws - Simple Server

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

// const wss = new WebSocketServer({ port: 8080 });

// var clients: Array<WebSocket> = [];
var clients = []

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
  clients.push(ws);

  ws.on('message', function message(data) {
    // console.log(data);
    console.log('received: %s', data);
    var strData = String(data);
    // ws.send(strData);  
    for (let i = 0; i < clients.length; i++) {
      let client = clients[i]
      client.send(strData);
    }  
  });

  // ws.send('log: something');
});