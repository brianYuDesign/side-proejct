import dataProvider from "./data-provider"
import { user, store, booking } from "../models"

export default {
  userProvider: dataProvider(user),
  storeProvider: dataProvider(store),
  bookingProvider: dataProvider(booking)
}
