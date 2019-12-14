import mongoose, { Schema } from "mongoose"
import { ROLE_LIST, USER_AREA_LIST } from "../constants"

const userSchema = new Schema(
  {
    party: {
      type: Number
    },
    bookingTime: {
      type: Date
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    store: {
      type: Schema.Types.ObjectId,
      ref: "Store"
    }
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)

export default User
