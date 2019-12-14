import dataProvider from "../../data-provider"

const { storeProvider, bookingProvider } = dataProvider
export default (provider = storeProvider) => ({
  Query: {
    stores: () => provider.getByFilter({ isEnabled: true }),
    store: (_, { id }) => provider.getById(id)
  },
  Mutation: {
    createStore: (_, { input }) => provider.create(input),
    deleteStore: (_, { id }) => provider.delete(id)
  },
  Store: {
    bookings: parent => bookingProvider.getByFilter({ store: parent.store })
  }
})
