import express from "express";
import validUrl from "valid-url"
import { generateString } from "../helper/codeHash.js";

const router = express.Router();

import Url from "../models/urlModel.js";

const baseUrl = "http:localhost:5000";

router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base URL");
  }

  const urlCode = generateString(Math.floor(Math.random() * 6));

  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({
        longUrl,
      });

      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
        });
        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(401).json("Invalid longUrl");
  }
});

export default router;
