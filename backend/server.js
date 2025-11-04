const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();


const joinus = require("./routes/joinusroute");
const admin = require("./routes/adminroute");
const event = require("./routes/eventroute");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Join us route
app.use("/api", joinus);
app.use("/api", admin);
app.use("/api", event);



app.get("/ping", (req, res) => {
  res.send("Server is alive!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

