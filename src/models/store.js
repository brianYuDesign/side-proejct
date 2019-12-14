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

export default mongoose.model("Store", storeSchema)
