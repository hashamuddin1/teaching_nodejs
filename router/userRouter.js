const express = require("express");
const userRouter = express.Router();
const { userSignup } = require("../controller/userController");

// GET: To Fetch
// POST: To Insert
// PUT: To Update to 1 entity
// PATCH: To Update to more than 1 entity
// DELETE: To Delete

userRouter.post("/api/signUp", userSignup);

module.exports = userRouter;
