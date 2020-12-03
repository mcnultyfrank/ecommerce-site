"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _products = _interopRequireDefault(require("./data/products.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_dotenv["default"].config();

app.get('/', function (req, res) {
  res.send('API is running...');
});
app.get('/api/products', function (req, res) {
  res.json(_products["default"]);
});
app.get('/api/products/:_id', function (req, res) {
  var product = _products["default"].find(function (item) {
    return item._id === req.params._id;
  });

  res.json(product);
});
var port = process.env.PORT;
var you = 'si fella';
app.listen(port, console.log("hi ".concat(you, ", server running in ").concat(process.env.NODE_ENV, " mode on port ").concat(port)));