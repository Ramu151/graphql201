const fetch = require("node-fetch");
const graphqlServer = require("graphql-yoga").GraphQLServer;

const fetchData = async (endpoint) => {
  let data = await fetch(endpoint);
  data = await data.json();
  return data;
};

const typeDefs = `
type Query {
  hotels(hotel_id: String): [Hotel!]
  review(hotel_id: String): Review!
}
type Hotel {
  hotel_id: Int
  hotel_name: String
  full_address: Address
  rating: Int
  contact_phone: String
  contact_email: String
  latitude: String
  longitude: String
  country: String
  pincode: Int
  checkin_checkout_details: String
  has_wifi: Boolean
  has_room_service: Boolean
  has_laundry: Boolean
  has_locker: Boolean
}
type Address {
  street: String
  city: String
  state: String
}
type Review{
  hotel_id: Int
  comments: String
  reviewer_name: String
  ratings: String
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
      let end_point = `http://localhost:8000/hotels/${hotel_id}/review`;
      let hotelReview = await fetchData(end_point);
      console.log("hotelReview ", hotelReview.hotelsList[0]);
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
