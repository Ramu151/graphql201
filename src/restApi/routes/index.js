const express = require("express");
const router = express.Router();
const controller = require("../controller/index");

router.get("/hotels", controller.getHotelsList);

router.get("/hotels/:hotelid", controller.getHotelsList);

router.get("/hotels/:hotelid/:services", controller.getHotelsList);

router.post("/hotels/:create", controller.createHotel);

module.exports = router;
