const express = require("express");
const { register, getUser } = require("../controllers/auth");
const { getAccessToRoutes } = require("../middlewares/authorization/auth");

// api/auth
const router = express.Router();

router.post("/register", register);
router.get("/profile", getAccessToRoutes, getUser);

module.exports = router;
