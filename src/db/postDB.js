const MongoClient = require("mongodb").MongoClient;
const crudObj = require("./Crud");

/**mongodb atlas connection establish with our application
 * https://docs.atlas.mongodb.com/driver-connection/#connect-your-application
 * 
 * */
const uri = "mongodb+srv://ramu15391:microservice@microservice-cluster.cxns18t.mongodb.net/?retryWrites=true&w=majority&appName=microservice-cluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

mongoClient.connect((err) => {
  db = mongoClient.db("post_db");
});

//insert query
const createPost = async (postData) => {
  const collection = db.collection("posts");
  const data = await crudObj.insertDocument(collection, postData);
  return data;
};

const getPostData = async ({ services, hotelid, create }) => {
  const collection = db.collection("posts");
  let hotelId = parseInt(hotelid);
  // crudObj.updateData(collection);
  console.log("services----", services);

  if (services) {
    const data = await crudObj.aggregateData(collection, hotelId, services);
    return data;
  } else {
    const data = await crudObj.findDocument(collection, hotelId);
    return data;
  }
};

const postObj = {
  getPostData,
  createPost,
};

module.exports = hotelObj;
