import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
const client = new OpenAI();

dotenv.config();

const app = express();

app.get("/", (req, res) => res.send("Hello"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(process.env.API_KEY);
});

const response = await client.responses.create({
  model: "gpt-5",
  input: "Write a short bedtime story about a unicorn.",
});

console.log(response.output_text);
console.log(dog);
