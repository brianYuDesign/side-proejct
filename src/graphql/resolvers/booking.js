import dataProvider from "../../data-provider"
import sendEmail from "../../services/send-email"

const { bookingProvider, storeProvider, userProvider } = dataProvider
export default (provider = bookingProvider) => ({
  Query: {
    bookings: () => provider.getAll(),
    booking: (_, { id }) => provider.getById(id)
  },
  Mutation: {
    createBooking: async (_, { input }, { user }) => {
      const booking = await provider.create({
        ...input,
        user: user.id
      })
      const store = storeProvider.getById(input.store)
      sendEmail({ user, booking, store })

      return booking
    },
    updateBooking: (_, { id, input }) => provider.update(id, input)
  },
  Booking: {
    store: parent => storeProvider.getById(parent.store),
    user: parent => userProvider.getById(parent.user)
  }
})
