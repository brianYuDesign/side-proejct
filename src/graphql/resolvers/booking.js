import dataProvider from "../../data-provider"

const { bookingProvider, storeProvider, userProvider } = dataProvider
export default (provider = bookingProvider) => ({
  Query: {
    bookings: () => provider.getAll(),
    booking: (_, { id }) => provider.getById(id)
  },
  Mutation: {
    createBooking: (_, { input }, { user }) =>
      provider.create({
        ...input,
        user: user.id
      }),
    updateBooking: (_, { id, input }) => provider.update(id, input)
  },
  Booking: {
    store: parent => storeProvider.getById(parent.store),
    user: parent => userProvider.getById(parent.user)
  }
})
