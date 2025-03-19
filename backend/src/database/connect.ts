import mongoose from "mongoose";
import config from "../config/env";
// 定义一个异步函数connectDB，用于连接数据库
const connectDB = async () => {
  try {
    // 使用mongoose连接数据库，传入配置文件中的MONGODB_URI
    await mongoose.connect(config.MONGODB_URI);
    // 连接成功后打印提示信息
    console.log("数据库连接成功");
  } catch (err) {
    // 连接失败后打印错误信息，并退出程序
    console.log("数据库连接失败：" + err);
    process.exit(1);
  }
};

export default connectDB;
