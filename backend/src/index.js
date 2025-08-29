// 필요한 모듈들 불러오기
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 4000;
const dotenv = require("dotenv");

// 환경변수 설정 파일(.env) 로드
dotenv.config();

// MongoDB 연결 설정
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    console.log("몽고디비 연결 완료!!");
  })
  .catch((err) => {
    console.log(err);
  });

// ==========================
// 미들웨어 설정
// ==========================

// CORS 설정 - 다른 도메인에서의 API 요청 허용
app.use(cors());
// JSON 파일 미들웨어 - 요청 body의 JSON을 파싱
app.use(express.json());
// 정적 파일 제공 설정 - 업로드된 이미지 파일에 접근할 수 있게 함
app.use("/uploads", express.static("uploads"));

// ==========================
// 라우트 설정
// ==========================

// users 관련 라우트를 별로 파일에서 관리
// '/users' 경로로 시작하는 모든 요청을 './routes/users' 파일로 위임
app.use("/users", require("./routes/users"));
app.use("/products", require("./routes/products"));

// ==========================
// 에러 핸들링 미들웨어
// ==========================

// 글로벌 에러 핸들러 - 모든 에러를 캐치하여 응답
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send(error.message || "서버에서 에러가 났습니다.");
});

// ==========================
// 서버 시작
// ==========================

app.listen(port, () => {
  console.log(`${port}번에서 실행이 되었습니다.`);
});
