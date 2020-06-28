const insertDocument = (collection, hotelJson) =>
  new Promise((resolve, reject) => {
    if (hotelJson) {
      collection.insertOne(hotelJson, (err, res) => {
        if (err) {
          console.log("error on document insertion", err);
        } else {
          console.log("record inserted", res.ops[0]);
          resolve(res.ops[0]);
        }
      });
    } else {
      collection.insertOne(
        {
          hotel_id: 1,
          hotel_name: "Saravanabhavan",
          full_address: {
            street: "cross cut road",
            city: "cbe",
            state: "TamilNadu",
          },
          rating: 5,
          contact_phone: 9001234567,
          contact_email: "saravanaBhavan@gmail.com",
          latitude: "103.3",
          longitude: "55.9",
          country: "India",
          pincode: 641014,
          checkin_checkout_details: "6am - 10pm",
          has_wifi: true,
          has_room_service: true,
          has_laundry: true,
          has_locker: false,
        },
        (err, res) => {
          if (err) {
            console.log("error on document insertion", err);
          } else {
            console.log("record inserted", res.ops[0]);
            resolve(res.ops[0]);
          }
        }
      );
    }
  });

module.exports = insertDocument;

// {
//  "hotel_id": 1,
//  "hotel_name" : "Saravanabhavan",
//  "full_address": {
//     "street": "cross cut road",
//     "city": "cbe",
//     "state": "TamilNadu",
//     },
//  "rating": 5,
//  "contact_phone": 9001234567,
//  "contact_email": "saravanaBhavan@gmail.com",
//  "latitude": "103.3",
//  "longitude": "55.9",
//  "country": "India",
//  "pincode": 641014,
//  "checkin_checkout_details": "6am - 10pm",
//  "has_wifi": true,
//  "has_room_service": true,
//  "has_laundry": true,
//  "has_locker": false,
// }
