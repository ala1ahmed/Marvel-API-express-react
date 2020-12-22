const express = require("express");
const router = express.Router();
const axios = require("axios");
const crypto = require('crypto');

router.get("/charachters", async (req, res) => {
  try {
    let offset=0;
    let limit=10;

    let pageNumber = req.query.page;

    if(!pageNumber)
    return res.status(400).send('Bad Request');

    offset=(pageNumber-1)*limit;

    let credentials = {
      publicKey: process.env.PUBLIC_KEY,
      ts: Date.now().toString(),
      hash: "",
      limit : 10
    };
    credentials.hash = crypto
      .createHash("md5")
      .update(credentials.ts + process.env.PRIVATE_KEY+credentials.publicKey)
      .digest("hex");

    const responseApi = await axios.get(`${process.env.API_URL}/characters`, {
      params: {
        ts: credentials.ts,
        apikey: credentials.publicKey,
        hash: credentials.hash,
        limit: limit,
        offset: offset
      },
    });

    return res.status(200).json(responseApi.data);

  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
