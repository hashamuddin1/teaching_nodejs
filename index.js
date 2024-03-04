const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
require("./config/database");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const userRouter = require("./router/userRouter");
app.use([userRouter]);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
