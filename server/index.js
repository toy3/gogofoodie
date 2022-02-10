const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const port = process.env.PORT || 5000;
axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "/"
    : "https://openapi.naver.com/v1/search/local.json";

app.use(cors());
app.use(bodyParser.json());

app.use("/api/data", (req, res) => {
  const store = req.query.query;
  axios
    .get("https://openapi.naver.com/v1/search/local.json", {
      headers: {
        "X-Naver-Client-Id": "dbHYKvL_c2Dfd1sNjWaJ",
        "X-Naver-Client-Secret": "vBxjsCszWH",
        "Access-Control-Allow-Origin": "*",
      },
      params: {
        query: store,
        display: 1,
        sort: "random",
      },
    })
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});
