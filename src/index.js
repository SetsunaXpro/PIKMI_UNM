const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRouter");
const studentRouter = require("./routes/studentRouter");
const authRouter = require("./routes/authRouter");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

// Dependencies
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/api", (req, res) => {
  res.send("API Ready to use!");
});
app.use("/api/users", userRouter);
app.use("/api/students", studentRouter);
app.use("/api/auth", authRouter);

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
