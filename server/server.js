const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => res.send("Hello"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(process.env.API_KEY);
});
// hello
