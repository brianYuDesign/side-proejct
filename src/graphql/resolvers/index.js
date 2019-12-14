import { resolvers } from "graphql-scalars"
import Booking from "./booking"
import Store from "./store"
import User from "./user"

export default [resolvers, Booking(), Store(), User()]
