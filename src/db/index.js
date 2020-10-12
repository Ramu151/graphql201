const MongoClient = require("mongodb").MongoClient;
const crudObj = require("./Crud");

/**mongodb atlas connection establish with our application
 * https://docs.atlas.mongodb.com/driver-connection/#connect-your-application
 * 
 * */
const uri =
  "mongodb+srv://admin:admin@cluster0-bn8gj.mongodb.net/hotel_booking?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri, { useNewUrlParser: true });


let db;

mongoClient.connect((err) => {
  db = mongoClient.db("hotel_booking");
});

//insert query
const createHotelEntry = async (hotelJson) => {
  const collection = db.collection("hotel");
  const data = await crudObj.insertDocument(collection, hotelJson);
  return data;
};

const getHotelData = async ({ hotelid, services, create }) => {
  const collection = db.collection("hotel");
  let hotelId = parseInt(hotelid);
  //crudObj.updateData(collection);
  console.log("services----", services);

  if (services) {
    const data = await crudObj.aggregateData(collection, hotelId, services);
    return data;
  } else {
    const data = await crudObj.findDocument(collection, hotelId);
    return data;
  }
};

const hotelObj = {
  getHotelData,
  createHotelEntry,
};

module.exports = hotelObj;
