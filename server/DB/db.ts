import mongoose, { ConnectOptions } from "mongoose";

const connection = mongoose.connect(`${process.env.MongoAtlas}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
} as ConnectOptions);

export default connection;
