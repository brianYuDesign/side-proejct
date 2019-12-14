import { gql } from "apollo-server-express"

export default gql`
  type Booking {
    party: Int
    bookingTime: DateTime
    status: BookingStatus
    store: Store
    user: User
  }

  enum BookingStatus {
    CREATED
    CANCEL
  }

  input BookingCreateInput {
    party: Int
    bookingTime: DateTime
    store: ID
  }

  input BookingUdateInput {
    bookingTime: DateTime
    status: BookingStatus
  }

  extend type Mutation {
    createBooking(input: BookingCreateInput!): Booking
    updateBooking(id: ID!, input: BookingUdateInput!): Booking
  }

  extend type Query {
    bookings: [Booking]
    booking(id: ID): Booking
  }
`
