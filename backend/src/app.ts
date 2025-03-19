import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./database/connect";
import config from "./config/env";
import User from "./models/User";

const app = express(); //  创建一个express应用

connectDB(); //  连接数据库

app.get("/users", async (req, res) => {
  //  获取用户列表
  try {
    const users = await User.find(); //   查询数据库，获取所有用户
    res.json(users); //   返回用户列表
  } catch (error) {
    res.status(500).json({ message: "服务错误" }); //   如果查询失败，返回500状态码和错误信息
  }
});

app.post("/users", async (req, res) => {
  //  创建用户
  try {
    const newUser = new User(req.body); //   创建一个新的用户对象
    const savedUser = await newUser.save(); //   保存用户对象到数据库
    res.status(201).json(savedUser); //   返回保存后的用户对象，状态码为201
  } catch (error) {
    res.status(400).json({ message: "服务错误" }); //   如果发生错误，返回状态码400和错误信息
  }
});

app.use(cors()); //  使用cors中间件，允许跨域请求
app.use(bodyParser.json()); //  使用body-parser中间件，解析请求体

app.listen(config.PORT, () => {
  //  监听端口号，启动服务
  console.log(`服务在${config.PORT}端口启动`);
});
