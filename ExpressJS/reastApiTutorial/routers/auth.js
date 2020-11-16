const express = require("express");
const { register, tokentest } = require("../controllers/auth");
const { getAccessToRoutes } = require("../middlewares/authorization/auth");

// api/auth
const router = express.Router();

router.post("/register", register);
router.get("/tokentest", getAccessToRoutes, tokentest);

module.exports = router;
