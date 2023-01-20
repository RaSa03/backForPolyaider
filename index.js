import express from "express";
import metaPkg from "ya-disk";

const { meta } = metaPkg;
const app = express();
const API_TOKEN = "y0_AgAAAABlkAHfAADLWwAAAADaETNUcJOnM6c7SheCwSzNvgfylNrtUB4";
const PORT = process.env.PORT || 2107;

app.get("/api", (req, res) => {
  console.log(req.url, req.method);
  (async () => {
    try {
      const metaGet = await meta.get(API_TOKEN, "Новая папка");
      return metaGet;
    } catch (error) {
      console.error("errrrorr", error);
    }
  })().then((meta) => {
    const json = JSON.stringify(meta);
    res.send(json);
  });
});

app.listen(PORT, () => console.log("SERVER STARTED IN PORT :" + PORT));
