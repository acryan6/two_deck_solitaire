var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cards");

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

const saveCards = (deck) => {
  deck.forEach((card) => {
    current = new Card(card);
    current.save();
  });
};

module.exports.getDeck = getDeck;
module.exports.saveCards = saveCards;
