import passport from "passport"
import GoogleTokenStrategy from "passport-google-id-token"
import env from "dotenv"

env.config()

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env

// GOOGLE STRATEGY
const GoogleTokenStrategyCallback = (parsedToken, googleId, done) =>
  done(null, {
    parsedToken,
    googleId,
    done
  })

passport.use(
  new GoogleTokenStrategy(
    {
      clientID: GOOGLE_CLIENT_ID
    },
    GoogleTokenStrategyCallback
  )
)

// promisified authenticate functions

const authenticateGoogle = (req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(
      "google-id-token",
      { session: false },
      (err, data, info) => {
        if (err) reject(err)
        resolve({ data, info })
      }
    )(req, res)
  })

export default { authenticateGoogle }
