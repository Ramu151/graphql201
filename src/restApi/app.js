const express = require("express");
const bodyParser = require("body-parser");
const app = new express();

const routes = require("./routes/index");
app.use(bodyParser.json());
app.use("/", routes);

app.listen(8000);
