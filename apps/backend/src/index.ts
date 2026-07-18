import dotenv from 'dotenv';
dotenv.config()


import argon2 from "argon2";
import cors from 'cors';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { emailNormalizer } from './lib/index.js';
import { transporter } from './lib/nodemailer.js';
import { Todo } from './todo.js';



const app = express();
const port = 8080;

console.log("transporter", transporter);


const USERS_FILE = path.join(process.cwd(), 'src/data', 'users.json');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/todos', (req, res) => {
  const todos = Todo();

  res.json(todos);
});

app.post('/register', async (req, res) => {
  const { email, password }: { email: string; password: string } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

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
      return res.status(400).json({ message: 'Email already exists' });
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




  // Send a response back to the client
  res.status(201).json({ message: 'User registered successfully', email: modifiedEmail });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
