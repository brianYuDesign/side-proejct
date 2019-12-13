import { ApolloServer } from "apollo-server-express"
import http from "http"
import express from "express"
import env from "dotenv"
import typeDefs from "./graphql/typeDefs"
import resolvers from "./graphql/resolvers"
import "./database"
env.config()

const { NODE_ENV, PORT } = process.env

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const accessToken = req.headers["access-token"]
    if (accessToken) {
      //return { user: AuthService.getUserFromAccessToken()}
    }
    return undefined
  }
})

const app = express()

server.applyMiddleware({ app })

const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen(PORT, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
})
