import express from "express";

const app = express();
const PORT = process.env.PORT || 2107;

app.get("/api", (req, res) => {
  // res.status(200).json("Сервер работает");
  res.send("Hello World, from express");
});

app.listen(PORT, () => console.log("SERVER STARTED IN PORT :" + PORT));

// fetch("https://polydisk.onrender.com/")
//   .then((res) => console.log(res.body))
//   .catch((er) => console.log(er.message, "errrrrrororfodfndnjf"));
