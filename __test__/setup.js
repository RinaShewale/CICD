import { jest } from "@jest/globals";
import { connect, disconnect } from "../src/config/testDb.js";
import redis from "../src/config/redis.js";

jest.setTimeout(300000);


beforeAll(async () => {

  await connect();

  if(redis.status !== "ready") {

    await new Promise((resolve,reject)=>{

      redis.once("ready", resolve);
      redis.once("error", reject);

    });

  }

  console.log("✅ Test Redis connected");

});


afterAll(async()=>{

  await disconnect();

  if(redis.status !== "end"){
    await redis.quit();
  }

  console.log("🛑 Test Redis disconnected");

});