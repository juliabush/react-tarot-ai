import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();
const client = new OpenAI({ apiKey: process.env.API_KEY });

const app = express();

const response = await client.responses.create({
  model: "gpt-5",
  input: "Write a short bedtime story about a unicorn.",
});
console.log(response.output_text);

app.get("/", (req, res) => res.send());

const PORT = 3000;
app.listen(PORT, () => {});
