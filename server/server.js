import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";
dotenv.config();
const client = new OpenAI({ apiKey: process.env.API_KEY });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// const response = await client.responses.create({
//   model: "gpt-5",
//   input: "Write a short bedtime story about a unicorn.",
// });
// // console.log(response.output_text);

app.post("/userinput", (req, res) => {
  const tarotinput = req.body.tarotUserInput;
  return console.log(tarotinput);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("hello");
  // this console.log displays in vs code terminal
});
