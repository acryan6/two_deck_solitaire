const request = require("request");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

var db = mongoose.connection;

db.on("error", function () {
  console.log("mongoose connection error");
});

db.once("open", function () {
  console.log("mongoose connected successfully");
});

var cardSchema = mongoose.Schema({
  image: String,
  value: String,
  suit: String,
  code: String,
});

var Card = mongoose.model("Card", cardSchema);

var getDeck = function (callback) {
  Card.find({}, function (err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = getDeck;
