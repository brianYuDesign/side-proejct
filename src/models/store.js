import mongoose, { Schema } from "mongoose"

const storeSchema = new Schema(
  {
    name: {
      type: String
    },
    businessHour: [
      {
        startTime: {
          type: Date
        },
        closeTime: {
          type: Date
        }
      }
    ],
    isEnabled: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
)

const Store = mongoose.model("Store", storeSchema)

export default Store
