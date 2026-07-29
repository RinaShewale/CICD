import "dotenv/config";

import Redis from "ioredis";


console.log(process.env.REDIS_URL);


const redis = new Redis(process.env.REDIS_URL);


redis.on("connect", () => {
    console.log("✅ Redis connected");
});


redis.on("ready", () => {
    console.log("🚀 Redis ready");
});


redis.on("error", (err) => {
    console.log("❌ Redis error:", err);
});


export default redis;