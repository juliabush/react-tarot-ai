import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";


dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
console.log("OPENAI_API_KEY is", process.env.OPENAI_API_KEY);


const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

// const response = await client.responses.create({
//   model: "gpt-5",
//   input: "Write a short bedtime story about a unicorn.",
// });
// // console.log(response.output_text);

app.post("/api/tarot", async (req, res) => {
  const question = req.body.question;
  return console.log("Recieved tarot question", question);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("hello");
  // this console.log displays in vs code terminal
});
