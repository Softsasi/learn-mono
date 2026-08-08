import { transporter } from './nodemailer.js';


type IEmailSend = {
  to: string;
  // subject: string;
  // text: string;
  // html: string;
};

export const sendEmail=async ({
  to
}:IEmailSend)=>{


   await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject: "Hello",
    text: "Your registration was successful!",
    html: `<html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 50px auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333333;
        }
        p {
          color: #666666;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          margin-top: 20px;
          background-color: #007BFF;
          color: #ffffff;
          text-decoration: none;
          border-radius: 4px;
        }
        .button:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome!</h1>
        <p>Your registration was successful. Thank you for joining us!</p>
        <a href="http://localhost:5173/login" class="button">Get Started</a>
      </div>
    </body>
  </html>`,
  });




}
