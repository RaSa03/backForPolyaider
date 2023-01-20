import express from "express";

const app = express();
const PORT = process.env.PORT || 2107;

app.get("/", (req, res) => {
  res.status(200).json("Сервер работает");
});

app.listen(PORT, () => console.log("SERVER STARTED IN PORT :" + PORT));
