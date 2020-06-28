const findDocument = require("./findDocs");
const aggregateData = require("./aggregate");
const updateData = require("./updateDocs");
const insertDocument = require("./insertDocs");

const crudObj = {
  findDocument,
  aggregateData,
  updateData,
  insertDocument,
};
module.exports = crudObj;
