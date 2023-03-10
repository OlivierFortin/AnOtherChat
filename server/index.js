import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8181});

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', (data) => {
      wss.clients.forEach((client) => {
        console.log(client.readyState);
        client.send(data.toString());
      });
  });
});
