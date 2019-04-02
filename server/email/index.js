"use strict";
const emailTemplates = require("email-templates");
const nodemailer = require("nodemailer");
const mailgunTransport = require("nodemailer-mailgun-transport");
const path = require("path");

const transporter = nodemailer.createTransport({
    host:"smtp.sendgrid.net",
    port:25,
    secure: false,
    auth: {
      type:"login",
        user: "apikey",
        pass: "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"
    }
});

// const mailgunOptions = {
//   auth: {
//     api_key: process.env.MAILGUN_ACTIVE_API_KEY,
//     domain: process.env.MAILGUN_DOMAIN
//   }
// };

// const transport = mailgunTransport(mailgunOptions);
// const transporter = nodemailer.createTransport(transport);

/**
 *
 * @return {Promise}
 */
function sendEmail({ fromEmail, locals, template }) {
  const email = new emailTemplates({
    transport: transporter,
    send: true,
    preview: false,
    message: {
      from: fromEmail
    },
    views: {
      options: {
        extension: "ejs"
      }
    },
    juice: true,
    juiceResources: {
      preserveImportant: true,
      webResources: {
        relativeTo: path.resolve("public")
      }
    }
  });
  return email.send({
    message: {
      to: fromEmail
    },
    template,
    locals: locals
  });
}

module.exports = sendEmail;
