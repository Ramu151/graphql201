//to get docs
const findDocument = (collection, hotelid) =>
  new Promise((resolve, reject) => {
    if (hotelid) {
      console.log("hotelid", hotelid);
      collection.find({ hotel_id: hotelid }).toArray((err, docs) => {
        console.log("Err", err);
        console.log(" find document", docs);
        resolve(docs);
      });
    } else {
      collection.find({}).toArray((err, docs) => {
        console.log(" find all docs", docs);
        console.log("Err", err);
        resolve(docs);
      });
    }
  });

module.exports = findDocument;
