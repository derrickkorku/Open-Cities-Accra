const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: "src", dev });
const handler = app.getRequestHandler();
const sendEmail = require("./email");

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.post("/send-email", async (req, res) => {
    let isSent = await sendEmail({
      fromEmail: "kwartengwisdomug95@gmail.com",
      message: "hello",
      template: "message"
    });

    if (isS) return res.json({ success: true });
  });

  server.get("*", (req, res) => {
    return handler(req, res);
  });
  server.listen(process.env.PORT || 5000, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${process.env.PORT || 5000}`);
  });
});
