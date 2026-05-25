const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const promptRoutes = require("./routes/promptRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/prompts", promptRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.json({ messge: "AI Learning Platform API is running" });
});

module.exports = app;