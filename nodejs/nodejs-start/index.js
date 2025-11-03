import express from "express";
import cors from "cors";

// CORS 처리
const app = express();
const port = 3000;

// 서버에서 cors()를 실행
app.use(cors());

// get: HTTP 메소드. 브라우저 주소창에서 데이터 전달
// /: 라우팅
// () => {}: 콜백함수
// 앱의 루트로 들어왔을 때, 콜백함수 실행
app.get("/", (req, res) => {
  res.send("Hello World");
});

// <라우팅 처리 예시>
// /dog로 접속시 데이터 보냄
app.get("/dog", (req, res) => {
  res.send({ sound: "멍멍" });
});

// /cat으로 접속시 데이터 보냄
app.get("/cat", (req, res) => {
  res.send({ sound: "야옹" });
});

// GET-params 방식) 변수로 parameter(여기서는 id) 받는 예시
// ex. /user/yewon
app.get("/user/:id", (req, res) => {
  const q = req.params;
  res.json({ userid: q.id });
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;
  console.log(name);

  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

// GET-query 방식) ?뒤에 &으로 연결
// ex. /user/yewon?name=yewon&age=20
app.get("/user/:id", (req, res) => {
  const { name, age } = req.query;
  console.log(name, age);
  res.json(name + " " + age);
});

// 3000번 포트에 대해 듣는 중
app.listen(port);

// 1초 지나면 콜백함수 실행
setTimeout(() => {
  console.log("1초 지남");
}, 1000);
