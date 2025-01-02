const express = require("express");
const {
  addPoints,
  deductPoints,
  getHistory,
  getStudents,
  addStudentToUser,
  getStudent,
} = require("../service/studentService");
const router = express.Router();

// Endpoint Students
router.get("/history/:id", getHistory);
router.get("/student", getStudents);
router.get("/student/:id", getStudent);
router.post("/add-points/:userId", addPoints);
router.post("/deduct-points", deductPoints);
router.post("/add-student", addStudentToUser);

module.exports = router;
