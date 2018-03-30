const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = module.exports = express();
var PORT = process.env.PORT || 3009;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});