const express = require("express");
const path = require("path");
const nodeMail = require("nodemailer");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "/website")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/website/index.html"));
});

app.post("/leads", async (req, res) => {
  try {
    let { data } = req.body;
    await sendMail(data);
    res.sendStatus(200);
  } catch (e) {
    console.log(`Error sending mail: ${e.message}`);
    res.sendStatus(503);
  }
});

const sendMail = async (form) => {
  const transporter = await nodeMail.createTransport({
    service: "gmail",
    auth: {
      user: "", // Redacted for security
      pass: "", // Redacted for security
    },
  });

  const mailOptions = {
    from: "", // Redacted for security
    to: "", // Redacted for security
    subject: "<---- NEW SOLAR INQUIRY ---->",
    html: `
      <h1>NEW SOLAR INQUIRY</h1>
      <br>Email: <strong>${form.email}</strong>
      <br>First Name: <strong>${form.firstName}</strong>
      <br>Last Name: <strong>${form.lastName}</strong>
      <br>Phone Number: <strong><a href="tel:${form.phone}">${form.phone}</a></strong>
      <br>City: <strong>${form.city}</strong>
      <br>State: <strong>${form.state}</strong>
      <br>Zip Code: <strong>${form.zip}</strong>
      <br><br>
      <p><strong>This delivery system was developed by @devante.dev</strong></p>
    `,
  };

  await transporter.sendMail(mailOptions);
  return "Message Sent Successfully!";
};

app.listen(process.env.PORT || 3000);
console.log("Server online!");
