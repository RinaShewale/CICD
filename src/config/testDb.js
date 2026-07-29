import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongoServer;

export const connect = async () => {
  try {
    mongoServer = await MongoMemoryServer.create({
      binary: {
        version: "7.0.14"
      }
    });

    const uri = mongoServer.getUri();

    await mongoose.connect(uri);

    console.log("✅ Test MongoDB connected");

  } catch (error) {
    console.log("❌ Mongo connection error", error);
    process.exit(1);
  }
};


export const disconnect = async () => {
  try {

    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.dropDatabase();
      await mongoose.disconnect();
    }

    if (mongoServer) {
      await mongoServer.stop();
    }

    console.log("🛑 Test MongoDB disconnected");

  } catch(error){
    console.log(error);
  }
};


export const clearCollections = async () => {

  const collections = mongoose.connection.collections;

  for (const key in collections) {
    await collections[key].deleteMany({});
  }

};