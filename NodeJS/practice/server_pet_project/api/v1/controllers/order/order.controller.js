const { Order, Product } = require('@database/v1');
const { sendMail } = require('@utils/email');
const Logging = require('@utils/logging');
const logger = Logging
    .getInstance()
    .registerLogger(`api:v1:order:${require('node:path').basename(__filename)}`);

async function createProducts(ctx) {
    try {
        for (let n = 0; n < 9; n++) {
            await Product.create({
                title: `Product ${n}`,
                description: `Description ${n}`,
                price: n,
            });
        }

        ctx.body = { status: 'ok' };
    } catch (error) {
        logger.error('createProducts error - caught exception: [%s]', error);
    }
}

async function getOrdersList(ctx) {
    try {
        const user = ctx.user;
        const orders = await Order.find({ user: user.id });

        ctx.body = { orders };
    } catch (error) {
        logger.error('getOrdersList error - caught exception: [%s]', error);
    }
}

async function checkout(ctx) {
    try {
        const { product, phone, address } = ctx.request.body;
        const user = ctx.user;
        const order = await Order.create({
            product,
            phone,
            address,
            user: user.id,
        });
        const ordredProduct = await Product.findById(product);

        await sendMail({
            to: user.email,
            subject: 'Confirm mail',
            locals: { id: user.id, product: ordredProduct },
            template: 'order-confirmation',
        });

        ctx.body = { order: order.id };
    } catch (error) {
        logger.error('checkout error - caught exception: [%s]', error);
    }
}

module.exports = {
    createProducts,
    getOrdersList,
    checkout,
};
