const socketIO = require('socket.io');

const { Session, Message } = require('@database/v1');

function socket(server) {
    const io = socketIO(server);

    io.use(async (socket, next) => {
        const token = socket.handshake.query.token;

        if (!token) {
            next(new Error('Anonymous sessions are not allowed.'));
            return;
        }
        const session = await Session.findOne({ token }).populate('user');

        if (!session) {
            next(new Error('Wrong or expired session token.'));
            return;
        }

        socket.user = session.user;
        next();
    });

    io.on('connection', (socket) => {
        socket.on('message', async (msg) => {
            const { user } = socket;
            
            const message = await Message.create({
                date: Date.now(),
                text: msg,
                chat: user.id,
                user: `${user.name} ${user.surname}`,
            });

            io.emit('message', message);
        });
    });

    return io;
}

module.exports = socket;
