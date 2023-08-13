// require("dotenv").config();
import { Helpers, replacements } from "@/Helpers";
import { createHTMLToSend } from "@/Helpers/mail";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(req: NextRequest, res: NextResponse) {
  const { fullName, email, subject, message } = await req.json();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
    secure: true,
  });
  const emailPath = path.resolve("app/api/contact/Email-template", "mail.html");
  const replacements: replacements = {
    name: fullName,
    message,
    subject,
    email,
    greeting: Helpers.setGreeting(),
  };
  let htmlToSend = createHTMLToSend(emailPath, replacements);
  let mailData = {
    from: "Moses Nwigberi",
    to: "mosesnwigberi@gmail.com",
    subject,
    html: htmlToSend,
    text: message + "| Sent from: " + email,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) {
        reject("This is the error: " + err);
      } else {
        resolve(info);
        return NextResponse.json({ error: "All Done" }, { status: 20 });
      }
    });
  });
  return NextResponse.json({ error: "All Done" }, { status: 200 });
}
