import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

function createTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;
  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });
}

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(String(email))) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    const transport = createTransport();
    const to = process.env.CONTACT_TO || process.env.SMTP_USER;
    if (!transport || !to) {
      return res.status(503).json({
        error: "Contact email is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and CONTACT_TO on the server.",
      });
    }

    await transport.sendMail({
      from: `"Portfolio" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>${name}</strong> &lt;${email}&gt;</p><p><strong>Subject:</strong> ${subject}</p><p>${message.replace(/\n/g, "<br/>")}</p>`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not send message. Try again later." });
  }
});

export default router;
