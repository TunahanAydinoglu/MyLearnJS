const express = require("express");
const {getAllQuestions} = require("../controllers/question");

// api/questions
const router = express.Router();

// router.get("/", (req, res) => {
//   //   res.send("<h1>Question Home Page<h1>");
//   res.status(200).json({
//     success: true,
//   });
// });

router.get("/",getAllQuestions)

module.exports = router;
