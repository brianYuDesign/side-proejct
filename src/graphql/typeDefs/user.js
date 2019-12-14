import { gql } from "apollo-server-express"

export default gql`
  type User {
    id: ID!
    userName: String
    password: String
    name: String
    email: String
    googleId: String
    role: ROLE
    bookings: [Booking]
  }

  enum ROLE {
    ADMIN
    CLIENT
  }

  extend type Mutation {
    createUser(input: UserCreateInput!): User
    deleteUser(id: ID!): ID
  }

  input UserCreateInput {
    userName: String
    password: String
    name: String
    email: String
    role: ROLE
  }

  extend type Query {
    users: [User]
    user(id: ID): User
  }
`
