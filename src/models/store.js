import mongoose, { Schema } from "mongoose"

const store = new Schema(
  {
    name: {
      type: String
    },
    startTime: {
      type: Date
    },
    closeTime: {
      type: Date
    }
  },
  { timestamps: true }
)

const Store = mongoose.model("Store", store)

export default Store
