import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
  //  导出接口IUser，继承自Document
  name: string;
  email: string;
  createTime?: Date;
  updateTime?: Date;
}

const UserSchema = new Schema<IUser>( //  创建UserSchema，类型为IUser
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default model<IUser>("User", UserSchema); //  导出User模型，模型名为User，Schema为UserSchema
