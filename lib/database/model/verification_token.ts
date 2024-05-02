import { Schema, model, models } from "mongoose";
import mongoose from "mongoose";

const TokenSchema = new Schema(
  {
    userID: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    user_email: { type : String },
    token: { type: String },
  },
  { timestamps: true }
);

const verify_token = models?.verification_token || model("verification_token", TokenSchema);

export default verify_token;
