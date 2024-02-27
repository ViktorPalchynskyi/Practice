const { v4: uuid } = require('uuid');

const { sendMail } = require('@utils/email');
const Logging = require('@utils/logging');
const { User } = require('@database/v1');
const logger = Logging
    .getInstance()
    .registerLogger(`api:v1:controllers:email:${require('node:path').basename(__filename)}`);

async function register(ctx) {
    try {
        const { email, name, surname, password } = ctx.request.body;
        const verificationToken = uuid();
        const user = await User.create({
            email,
            name,
            surname,
            password,
            verificationToken,
        });
        await user.setPassword(password);
        await user.save();

        await sendMail({
            template: 'confirmation',
            locals: { token: verificationToken },
            to: email,
            subject: 'Подтвердите почту',
        });

        ctx.body = { status: 'ok' };
    } catch (error) {
        logger.error('register error - caught exception: [%s]', error);
    }
}

async function confirm(ctx) {
    try {
        const { verificationToken } = ctx.params;
        const user = await User.findOne({ verificationToken });

        if (!user) {
            ctx.status = 400;
            ctx.body = 'Confirmation link is expired or invalid.';
        }

        await User.updateOne({ verificationToken }, { $unset: { verificationToken: '' } });

        const token = uuid();

        ctx.body = { token };
    } catch (error) {
        logger.error('confirm error - caught exception: [%s]', error);
    }
}

module.exports = {
    register,
    confirm,
};
