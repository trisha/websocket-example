// https://github.com/websockets/ws - Simple Server

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

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
    // for (let i = 0; i < clients.length; i++) {
    //   let client = clients[i]
    //   client.send(strData);
    // }  
    console.log(wss.clients.size); // wss.clients is a set
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(strData);
      }
    });


  });

  // Below didn't work at all, not even when I put it inside the wss.conection
  ws.on('open', function open() {
    console.log(wss.clients.size); // wss.clients is a set
  })
  
  ws.on('close', function close() {
    console.log('disconnected');
    // Remove item by value from list: https://stackoverflow.com/a/5767357/15185160
    const index = clients.indexOf(ws);
    if (index > -1) { // only splice if item is found
      clients.splice(index, 1); // 2nd param means remove one item only
    }
  });
  // ws.send('log: something');
});