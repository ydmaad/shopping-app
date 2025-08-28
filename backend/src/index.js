const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 4000;
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    console.log("몽고디비 연결 완료!!");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("안녕하세영~~~~~~~~");
});

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`${port}번에서 실행이 되었습니다.`);
});
