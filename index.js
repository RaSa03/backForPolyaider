import express from "express";
import metaPkg from "ya-disk";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const { meta } = metaPkg;
const app = express();
const API_TOKEN = process.env.YaToken;
const PORT = process.env.PORT || 2107;

const normalizePAth = (url) => {
  try {
    url = decodeURI(url);
  } catch (e) {
    console.error(e);
  }
  let path = url.slice(5).split("%2F").join("/");
  return path;
};
app
  .use((req, res, next) => {
    const ACAO = res.getHeader("Access-Control-Allow-Origin");
    const CURRENT_URL =
      "http://localhost https://polyaider.web.app https://polyaider.firebaseapp.com/";
    if (CURRENT_URL.includes(ACAO)) {
      res.setHeader("Access-Control-Allow-Origin", ACAO);
    }
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  })

  .get("/api/:path", (req, res) => {
    const PATH = normalizePAth(req.params.path);
    console.log(PATH);
    (async () => {
      try {
        const metaGet = await meta.get(API_TOKEN, PATH, {
          limit: 1000,
        });
        return metaGet;
      } catch (error) {
        console.error("errrrorr", error);
      }
    })().then((meta) => {
      const json = JSON.stringify(meta);
      res.send(json);
    });
  })

  .listen(PORT, () => console.log("SERVER STARTED IN PORT :" + PORT));
