const question = require("./question");
const auth = require("./auth");

const express = require("express");

// /api
const router = express.Router();

router.use("/questions", question);
router.use("/auth", auth);

module.exports = router;