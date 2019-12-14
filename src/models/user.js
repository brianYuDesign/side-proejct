import mongoose, { Schema } from "mongoose"
import { ROLE_LIST } from "../constants"

const userSchema = new Schema(
  {
    userName: {
      type: String
    },
    password: {
      type: String
    },
    name: {
      type: String
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true
    },
    googleId: {
      type: Stirng
    },
    role: {
      type: String,
      enum: ROLE_LIST
    },
    isEnabled: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)

export default User
