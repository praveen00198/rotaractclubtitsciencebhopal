const express = require("express");
const cors = require("cors");
require("dotenv").config();

const joinRoutes = require("./routes/joinUsRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Join us route
app.use("/api", joinRoutes);




app.get("/ping", (req, res) => {
  res.send("Server is alive!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

