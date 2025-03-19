import dotenv from "dotenv";
dotenv.config(); //  配置dotenv
export default {
  //  导出默认配置
  //  从环境变量中获取MONGODB_URI，如果没有则使用默认值
  MONGODB_URI:
    process.env.MONGODB_URI || "mongodb://localhost:27017/user_manage",
  PORT: Number(process.env.PORT) || 3000, //  从环境变量中获取PORT，如果没有则使用默认值
};
