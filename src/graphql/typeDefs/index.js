import { typeDefs } from "graphql-scalars"
import Root from "./root"
import Booking from "./booking"
import Store from "./store"
import User from "./user"

export default [...typeDefs, Root, Booking, Store, User]
