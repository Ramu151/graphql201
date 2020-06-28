const updateData = (collection) => {
  collection.updateMany(
    {},
    {
      $set: {
        tariff: "ram",
        room_type: ["Single", "Double", "Delux"],
        start_date: "",
        end_date: "",
      },
    }
  );
  // collection.updateOne(
  //   { hotel_id: 4 },
  //   { $set: { reviewer_name: "tamil", comments: "wonderful rooms" } }
  // );
};

module.exports = updateData;
