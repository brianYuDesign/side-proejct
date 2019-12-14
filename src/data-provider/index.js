import dataProvider from "./data-provider"
import { User, Store, Booking } from "../models"

export default {
  userProvider: dataProvider(User),
  storeProvider: dataProvider(Store),
  bookingProvider: dataProvider(Booking)
}
