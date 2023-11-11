const localURL = '//localhost:8000/ws';

const socket = new WebSocket(`wss:${localURL}`);

document.forms.publish.onsubmit = function () {
    const outgoingMessage = this.message.value;
    socket.send(outgoingMessage);

    return false;
};

socket.onmessage = (event) => {
    const message = event.message;
    const messageElem = document.createElement('div');
    messageElem.textContent = message;
    document.getElementById('messages').prepend(messageElem);
};