# A simple chat-server based on socket.io

1. Clone repository.
2. Run `npm i`.
3. Run `node app.js`.

Live example: [https://chat-server.fbg.pl](https://chat-server.fbg.pl)

## Connecting to the server

1. Install socket.io client:

```
npm i socket.io-client
```

2. Initialize socket connection:

```js
import * as io from 'socket.io-client';

// ...

const connection = io.connect('https://chat-server.fbg.pl');
```

3. Sending events:

```js
connection.emit('chat message', { text: 'Message text', authorId: 'John Doe' });
```

As a response you will receive:

```js
{
    authorId: 'John Doe',
    id: 'huSfgxpQTy'
    text: 'Message text'
    timestamp: 1587727149888
}
```

4. Listening for the events:

```js
connection.on('chat message', (message) => console.warn(message));
```
