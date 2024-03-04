//DATABASE CONNECTION
require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.DATABASE_URL}`)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.log(error);
  });
