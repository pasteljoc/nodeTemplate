// import connection
const dbEjerc = require("../models/schema");

const controller = {};

controller.index = (req, res) => {
  res.render("index");
};

module.exports = controller;