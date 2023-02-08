const routes = require("./routes/routes");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

const mongoString = process.env.DATABASE_URL;

app.use(express.json());

app.listen(3287, () => {
  console.log(`Server Started at ${3287}`);
});

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use("/api", routes);
