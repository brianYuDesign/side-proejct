import mongoose, { Schema } from "mongoose"
import { BOOKING_STATUS_LIST } from "../constants"

const bookingSchema = new Schema(
  {
    party: {
      type: Number
    },
    bookingTime: {
      type: Date
    },
    status: {
      type: String,
      enum: BOOKING_STATUS_LIST
    },
    store: {
      type: Schema.Types.ObjectId,
      ref: "Store"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
)

const Booking = mongoose.model("Booking", bookingSchema)

export default Booking
