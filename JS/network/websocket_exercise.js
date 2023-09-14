const localURL = '//localhost:8000/ws';

const socket = new WebSocket(`wss:${localURL}`);

document.forms.publish.onsubmit = (event) => {
    event.preventDefault();
    const outgoingMessage = event.message.value;
    socket.send(outgoingMessage);
};

socket.onmessage = (event) => {
    const message = event.message;
    const messageElem = document.createElement('div');
    messageElem.textContent = message;
    document.getElementById('messages').prepend(messageElem);
};