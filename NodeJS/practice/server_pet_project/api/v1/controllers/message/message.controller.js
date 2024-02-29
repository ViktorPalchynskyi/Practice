const { Message } = require('@database/v1');

const Logging = require('@utils/logging');
const logger = Logging
    .getInstance()
    .registerLogger(`api:v1:controllers:message:${require('node:path').basename(__filename)}`);

async function messageList(ctx) {
    try {
        const { user } = ctx;
        const messages = await Message.find({ chat: user.id }).limit(20);

        ctx.body = { messages };
    } catch (error) {
        logger.error('messageList error - caught exception: %s', error);
    }
}

module.exports = {
    messageList,
};
