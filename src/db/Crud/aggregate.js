const getHotelAmenities = (collection, hotelid) =>
  new Promise((resolve, reject) => {
    collection
      .aggregate([
        { $match: { hotel_id: hotelid } },
        {
          $project: {
            hotel_id: 1,
            wifi: 1,
            room_service: 1,
            laundry: 1,
            locker: 1,
            giftShops: 1,
            swimmingPool:1
          },
        },
      ])
      .toArray((err, docs) => {
        console.log("Err", err);
        console.log("aggregate docs", docs);
        resolve(docs);
      });
  });

const getHotelReviews = (collection, hotelid) =>
  new Promise((resolve, reject) => {
    collection
      .aggregate([
        { $match: { hotel_id: hotelid } },
        {
          $project: {
            hotel_id: 1,
            reviewer: 1,
            comments: 1,
            rating: 1,
          },
        },
      ])
      .toArray((err, docs) => {
        console.log("Err", err);
        console.log("aggregate docs", docs);
        resolve(docs);
      });
  });

const getHotelTariff = (collection, hotelid) =>
  new Promise((resolve, reject) => {
    collection
      .aggregate([
        { $match: { hotel_id: hotelid } },
        {
          $project: {
            _id:1,
            hotel_id: 1,
            room_type: 1,
            tariff: 1,
          },
        },
      ])
      .toArray((err, docs) => {
        console.log("Err", err);
        console.log("aggregate docs", docs);
        resolve(docs);
      });
  });

const aggregateData = async (collection, hotelid, services) => {
  switch (services) {
    case "amenities":
      console.log("aggregate services", services);
      const amenities = await getHotelAmenities(collection, hotelid);
      return amenities;
      break;
    case "review":
      const reviews = await getHotelReviews(collection, hotelid);
      return reviews;
      break;
    case "tariff":
      const tariff = await getHotelTariff(collection, hotelid);
      return tariff;
      break;
    default:
      break;
  }
};

module.exports = aggregateData;
