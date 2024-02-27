const { config } = require('@config');
const { getPugTemplate } = require('@utils/helpers');
const juice = require('juice');

const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const SMTPTransport = require('nodemailer-smtp-transport');
const StubTransport = require('nodemailer-stub-transport');

const transportEngine =
    config.app.nodeEnv === 'test'
        ? new StubTransport()
        : new SMTPTransport({
              host: 'smtp.gmail.com',
              port: 465,
              secure: true,
              auth: {
                  user: config.mailer.user,
                  pass: config.mailer.password,
              },
          });

const transport = nodemailer.createTransport(transportEngine);
transport.use('compile', htmlToText());

module.exports = async function sendMail(options) {
    const { template, locals, to, subject } = options;

    const html = getPugTemplate({ template, locals });

    const message = {
        html: juice(html),
        to: {
            address: to,
        },
        subject,
    };

    return await transport.sendMail(message);
};
