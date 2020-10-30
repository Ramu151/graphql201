//to get docs
//http://zetcode.com/javascript/mongodb/
const findDocument = (collection, hotelid) =>
  new Promise((resolve, reject) => {
    if (hotelid) {
      console.log("hotelid", hotelid);
      collection.find({ hotel_id: hotelid }, {giftShops:0, room_type:0, reviewer_name:0,comments:0,room_service:0, laundry:0, locker:0, wifi:0, swimmingPool:0 }).toArray((err, docs) => {
        console.log("Err", err);
        console.log(" find document", docs);
        resolve(docs);
      });
    } else {
      collection.find({}, {giftShops:1, room_type:1, reviewer_name:1,comments:1,room_service:1, laundry:1, locker:1, wifi:1, swimmingPool:1 }).toArray((err, docs) => {
        console.log(" find all docs", docs);
        console.log("Err", err);
        resolve(docs);
      });
    }
  });

module.exports = findDocument;
