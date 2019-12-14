import { gql } from "apollo-server-express"

export default gql`
  type Store {
    name: String
    businessHour: [BusinessHour]
    bookings: [Booking]
  }

  type BusinessHour {
    type: WEEKTYPE
    startTime: DateTime
    closeTime: DateTime
  }

  input BusinessHourInput {
    type: WEEKTYPE
    startTime: DateTime
    closeTime: DateTime
  }

  enum WEEKTYPE {
    SUN
    MON
    TUE
    WED
    THU
    FRI
    SAT
  }

  input StoreCreateInput {
    name: String
    businessHour: [BusinessHourInput]
  }

  extend type Mutation {
    createStore(input: StoreCreateInput!): Store
    deleteStore(id: ID!): ID
  }

  extend type Query {
    stores: [Store]
    store(id: ID): Store
  }
`
