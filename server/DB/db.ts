import mongoose from "mongoose";

const mongoDB = process.env.MongoAtlas;

const connection = mongoose.connect(`${mongoDB}`);

export default connection;
