let hotelObj = require("../../db/index");

const { createHotelEntry, getHotelData } = hotelObj;
exports.getHotelsList = async (req, res) => {
  //let { hotelid, services } = req.params;
  //console.log("params ------", req);

  let hotelsList = await getHotelData(req.params);
  //console.log("hote", hotelsList);

  res.json({
    hotelsList,
  });
};

exports.createHotel = async (req, res) => {
  const hotelJson = req.body || {};
  const hotelData = await createHotelEntry(hotelJson);
  console.log("create query ------", req.body, hotelData);
  res.send(hotelData);
};
