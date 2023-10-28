import express from "express";
import passport from "passport";

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["Profile"],
  })
);

router.get("/login", (req, res, next) => {
  res.send("logged in");
});

export default router;
