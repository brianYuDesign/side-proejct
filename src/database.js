import mongoose from "mongoose"
import env from "dotenv"

env.config()
const {
  NODE_ENV,
  PRJ_NAME,
  DB_HOSTNAME,
  DB_USERNAME,
  DB_PASSWORD
} = process.env
mongoose.Promise = global.Promise
mongoose.set("useFindAndModify", false)

const url =
  NODE_ENV === "production"
    ? `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}/${PRJ_NAME}`
    : `mongodb://${DB_HOSTNAME}/${PRJ_NAME}`

mongoose.connect(url, { useNewUrlParser: true })
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
)
