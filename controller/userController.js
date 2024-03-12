// Request: Jo user krta hay.
// Response: Jo server se ata hay

// Get aur Delete my kabhi bhi body nhi jaati. Yatw Params or query
// PUT, PATCH or POST may body jaati hay

const { users } = require("../model/userModel");

const userSignup = async (req, res) => {
  try {
    const insertUser = new users({
      fullName: req.body.fullName,
      emailAddress: req.body.emailAddress,
      password: req.body.password,
    });

    await insertUser.save();

    return res.send({
      status: 201,
      message: "User has been Created Successfully",
      data: insertUser,
    });
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};

module.exports = {
  userSignup,
};
