const mongoose = require("mongoose");

const connection = mongoose.connect(`${process.env.MongoAtlas}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
});

module.exports = connection;
