import express from "express";
import cors from "cors";
import helmet from "helmet";
import dayjs from "dayjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();

app.use(cors());
app.use(helmet()); //미들웨어

const today = new Date();
const todayToDayjs = dayjs(today).format("YYYY-MM-DD");
console.log({ today, todayToDayjs });

const password = "1234";
const hashedPassword = bcrypt.hashSync(password, 10);
console.log({ hashedPassword });

const token = jwt.sign("1234", "aefrgbqetwabqwedcwevbrweqbwQ");
console.log({ token });

app.get("/", (req, res) => {
  res.send("Express");
});

app.listen(8000, () => {
  console.log("서버가 시작되었습니다.");
});
