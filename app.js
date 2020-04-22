const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

function generateRandomString(length = 10) {
  const possibleCharacters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let output = '';
  for (let i = 0; i < length; i++) {
    output += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length)
    );
  }
  return output;
}

app.get('/', (req, res) => res.send('Server works fine.'));

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    if (msg.text && msg.authorId) {
      msg.id = generateRandomString();
      msg.timestamp = Date.now();
      io.emit('chat message', msg);
    }
  });
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});
