var express = require("express");
var bodyParser = require("body-parser");
const request = require("request-promise");
// var db = require("../database-mongo");

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../react-client/dist"));

app.get("/api/cards", function (req, res) {
  request("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2")
    .then((res) => JSON.parse(res))
    .then((deck) => {
      return request(
        `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=104`
      );
    })
    .then((res) => JSON.parse(res))
    .then((deck) => {
      res.send(JSON.stringify(deck.cards));
    })
    .catch((err) => console.log(err));
});

// app.post("/api/cards", async (req, res) => {
//   request("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//     .then((res) => JSON.parse(res))
//     .then((deck) => {
//       return request(
//         `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=52`
//       );
//     })
//     .then((res) => JSON.parse(res))
//     .then((deck) => {
//       db.saveCards(deck.cards);
//     })
//     .then(() => {
//       res.send("saved!");
//     })
//     .catch((err) => console.log(err));
// });

let port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("listening on port 3000!");
});
