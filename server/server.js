const express = require("express");
const app = express();
import { config } from "./.gitignore/.env";
config();

app.get("/", (req, res) => res.send("Hello"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(process.env.API_URL);
});
