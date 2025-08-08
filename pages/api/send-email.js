import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hello2appmechanic@gmail.com",
        pass: "ooixwjqkzfpibkfn", // App password, NOT your Gmail password
      },
    });

    const mailOptions = {
      from: "hello2appmechanic@gmail.com",
      to: "nextdevlabs7@gmail.com",
      // to : "amanpanchal144@gmail.com",
      subject: "Email from website",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully", info });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Error sending email",
      error: e.message,
    });
  }
}
