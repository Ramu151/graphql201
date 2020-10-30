const updateData = (collection) => {
  collection.updateMany(
    {},
    {
      $rename:{
        "reviewer_name": "reviewer",
      }
      
      // $set: {
      //   tariff: 100,
      // },
      // $unset: {
      //   start_date: 1,
      //   end_date: 1,
      // }
    }, false, true //The false, true in the method above are: { upsert:false, multi:true }. You need the multi:true to update all your records.
  );
  // collection.updateOne(
  //   { hotel_id: 4 },
  //   { $set: { reviewer_name: "tamil", comments: "wonderful rooms" } }
  // );
};

module.exports = updateData;

//https://stackoverflow.com/questions/9254351/how-can-i-rename-a-field-for-all-documents-in-mongodb