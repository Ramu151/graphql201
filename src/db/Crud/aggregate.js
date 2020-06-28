const getHotelAmenities = (collection, hotelid) =>
  new Promise((resolve, reject) => {
    collection
      .aggregate([
        { $match: { hotel_id: hotelid } },
        {
          $project: {
            hotel_id: 1,
            has_wifi: 1,
            has_room_service: 1,
            has_laundry: 1,
            has_locker: 1,
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
            reviewer_name: 1,
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
            hotel_id: 1,
            room_type: 1,
            start_date: 1,
            end_date: 1,
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
