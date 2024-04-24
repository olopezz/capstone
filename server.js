require("dotenv").config();
console.log("MONGODB_URI:", process.env.MONGODB_URI);
const express = require("express");
const path = require("path");
const connectDB = require("./client/config/database");
const productsRoutes = require("./routes/products");
const cors = require("cors");

const app = express();

// Increase the maximum header size limit
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Enable CORS
app.use(cors());

connectDB();

app.use("/api/products", productsRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
