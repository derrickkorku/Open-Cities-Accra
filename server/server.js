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
    try{
    let isSent = await sendEmail({
      fromEmail: req.body.email,
      locals: {
        name:req.body.name,
        phone:req.body.phone_number,
        message:req.body.Message
      },
      template: "message"
    });

    if (isSent) return res.json({ success: true });
  }catch(err){
    return res.send({success:false, message:err.message})
  }
  });

  server.get("*", (req, res) => {
    return handler(req, res);
  });
  server.listen(process.env.PORT || 5000, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${process.env.PORT || 5000}`);
  });
});
