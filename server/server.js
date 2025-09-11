import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";


dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.post("/api/tarot", async (req, res) => {
  const question = req.body.question;
  console.log("Received tarot question:", question);

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "user", content: question }
      ],
    });

    const answer = completion.choices[0].message.content;

    res.status(200).json({ tarotReading: answer });
  } catch (error) {
    console.error("Error generating tarot reading:", error);
    res.status(500).json({ error: "Failed to get tarot reading" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("hello");
  // this console.log displays in vs code terminal
});
