import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import rateLimit, { ipKeyGenerator } from "express-rate-limit";
import RedisStore from "rate-limit-redis";

import redis from "./config/redis.js";

import authRoutes from "../src/routes/auth.routes.js";
import User from "../src/model/user.js";


const app = express();


// EJS setup
app.set("view engine", "ejs");
app.set("views", "./views");


app.use(express.json());
app.use(morgan("dev"));


app.use(express.static("public"));


// =======================
// Global Rate Limiter
// =======================

const globalLimiter = rateLimit({

    windowMs: 15 * 60 * 1000,

    max: 100,

    keyGenerator: (req) => {
        return ipKeyGenerator(req.ip);
    },

    store: new RedisStore({

        sendCommand: (...args) => {
            return redis.call(...args);
        },

        prefix: "rate-limit:",

    }),

    message: {
        success: false,
        message: "Too many requests. Please try again later."
    },

    statusCode: 429,

    standardHeaders: true,

    legacyHeaders: false,

});


app.use(globalLimiter);


// =======================
// EJS Home Route
// =======================

app.get("/", (req, res) => {
    res.render("index");
});


// =======================
// API Routes
// =======================

app.use(
    "/api/auth",
    authRoutes
);


export default app;