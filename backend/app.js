import express from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
const app = express();
export default app;

dotenv.config({
  path: "./config/config.env",
});

//using Middlewares
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

connectPassport();

// Importing Routes

import useRoutes from "./routes/user.js";
import passport from "passport";

app.use("/api/v1", useRoutes);
