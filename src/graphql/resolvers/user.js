import dataProvider from "../../data-provider"

const { userProvider, bookingProvider } = dataProvider
export default (provider = userProvider) => ({
  Query: {
    users: () => provider.getByFilter({ isEnabled: true }),
    user: (_, { id }) => provider.getById(id)
  },
  Mutation: {
    createUser: (_, { input }) => provider.create(input),
    deleteUser: (_, { id }) => provider.delete(id)
  },
  User: {
    bookings: parent => bookingProvider.getByFilter({ user: parent.user })
  }
})
