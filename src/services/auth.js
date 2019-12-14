import passport from "./passport"
import dataProvider from "../data-provider"
const { userProvider } = dataProvider
const validateAccessToken = async accessToken => {
  const { data } = await passport.authenticateGoogle({
    body: {
      id_token: accessToken
    }
  })
  const { payload } = data.parsedToken
  const user = await userProvider.getOne({
    googleId: data.parsedToken.payload.sub
  })

  if (!user) {
    const newUser = await userProvider.create({
      name: payload.name,
      email: payload.email,
      googleId: payload.sub
    })
    return newUser
  }
  return user
}

export default {
  validateAccessToken
}
