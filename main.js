const nodemailer = require('nodemailer')

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
        break;
        }
    }
}

async function fax2daMax () {
  
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "palhealthtechnologies@gmail.com",
      pass: "uldoRlYt"
    }
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to: "fax2132942943@titaniumvfax.com",
    subject: "",
    text: "",
    attachments: {
        filename: "test multifax.pdf",
        path: "test multifax.pdf"
    }
  });

  console.log("Message sent: %s", info.messageId);
 
  sleep(10000)
  fax2daMax()
}

fax2daMax()


