const fetch = require("node-fetch");
const graphqlServer = require("graphql-yoga").GraphQLServer;

const fetchData = async (endpoint) => {
  let data = await fetch(endpoint);
  data = await data.json();
  return data;
};

const typeDefs = `
type Query {
  hotels(hotel_id: Int): [Hotel!]
  review(hotel_id: Int): Review!
  tariff(hotel_id: Int): Tariff!
  amenities(hotel_id: Int): Amenities!
}
type Hotel {
  hotel_id: Int
  name: String
  address: Address
  rating: Int
  phone: String
  email: String
  latitude: String
  longitude: String
  country: String
  pincode: Int
  checkIn: String
  checkOut: String
  wifi: Boolean
  room_service: Boolean
  laundry: Boolean
  locker: Boolean
  tariff: Int
  swimmingPool: Boolean
  giftShops: Boolean
  comments: String
  reviewer: String
  ratings: String
}
type Address {
  street: String
  city: String
  state: String
}
type Review{
  hotel_id: Int
  comments: String
  reviewer: String
  ratings: String
}
type Tariff{
  hotel_id: Int
  tariff: Int
}
type Amenities{
  hotel_id: Int
  wifi: Boolean
  room_service : Boolean
  laundry: Boolean
  locker: Boolean
  giftShops: Boolean
  swimmingPool: Boolean
}
`;
const resolvers = {
  Query: {
    async hotels(parent, args) {
      console.log("parent ", args);
      const hotel_id = args.hotel_id;
      let end_point = "http://localhost:8000/hotels";
      if (hotel_id) {
        end_point = `http://localhost:8000/hotels/${hotel_id}`;
      }
      const { hotelsList } = await fetchData(end_point);
      console.log("hotelList ", hotelsList);
      return hotelsList;
    },
    async review(parent, args) {
      const hotel_id = args.hotel_id;
      let end_point = `http://localhost:8000/hotels/review/${hotel_id}`;
      let hotelReview = await fetchData(end_point);
      console.log("hotelReview ", hotelReview.hotelsList[0]);
      return hotelReview.hotelsList[0];
    },
    async tariff(parent, args) {
      const hotel_id = args.hotel_id;
      let end_point = `http://localhost:8000/hotels/tariff/${hotel_id}`;
      let hotelReview = await fetchData(end_point);
      console.log("hotel tariff ", hotelReview.hotelsList[0]);
      return hotelReview.hotelsList[0];
    },
    async amenities(parent, args) {
      const hotel_id = args.hotel_id;
      let end_point = `http://localhost:8000/hotels/amenities/${hotel_id}`;
      let hotelReview = await fetchData(end_point);
      console.log("hotel amenities ", hotelReview.hotelsList[0]);
      return hotelReview.hotelsList[0];
    },
  },
};

const options = {
  port: 7777,
};
const server = new graphqlServer({
  typeDefs,
  resolvers,
  options,
});

server.start(options, ({ port }) =>
  console.log(`server created and running on Port ${options.port}`)
);
