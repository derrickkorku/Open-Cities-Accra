"use strict";
const emailTemplates = require("email-templates");
const nodemailer = require("nodemailer");
const mailgunTransport = require("nodemailer-mailgun-transport");
const path = require("path");
const { Config } = require("../../config/config");

// const transporter = nodemailer.createTransport({
//     host: Config("EMAIL_HOST"),
//     port: Config("EMAIL_PORT"),
//     secure: true,
//     auth: {
//         user: Config("EMAIL_USERNAME"),
//         pass: Config("EMAIL_PASSWORD")
//     }
// });

const mailgunOptions = {
  auth: {
    api_key: Config("MAILGUN_ACTIVE_API_KEY"),
    domain: Config("MAILGUN_DOMAIN")
  }
};

const transport = mailgunTransport(mailgunOptions);
const transporter = nodemailer.createTransport(transport);

/**
 *
 * @return {Promise}
 */
function sendEmail({ fromEmail, message, template }) {
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
    locals: message
  });
}

module.exports = sendEmail;
