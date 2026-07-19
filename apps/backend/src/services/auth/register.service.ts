import argon2 from "argon2";
import fs from 'node:fs';
import { USERS_FILE } from '../../constant.js';
import { emailNormalizer } from '../../lib/index.js';
import { transporter } from '../../lib/nodemailer.js';



export const registerService = async ({ email, password }: { email: string; password: string }) => {

  // Here you would typically save the user to a database
  console.log(`Registered user: ${email}`);

  // normalize the email before sending it back in the response
  let modifiedEmail = emailNormalizer(email);

  // 3. datababase validation:
    const users: { email: string; password: string }[] = JSON.parse(
    fs.readFileSync(USERS_FILE, 'utf8')
  );

    const exists = users.some((user) => user.email === modifiedEmail);

    if (exists) {
      return { error: 'Email already exists', status: 400 };
    }

    // 4. hash password
    const hashedPassword = await argon2.hash(password);



    // 5. Save the user to the database (in this case, a JSON file)
    users.push({ email: modifiedEmail, password: hashedPassword });
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));


    // 6. send email confirmation / use css template for email
     await transporter.sendMail({
  from: process.env.SMTP_FROM,
  to: modifiedEmail,
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

  return { message: 'User registered successfully', email: modifiedEmail };
}
