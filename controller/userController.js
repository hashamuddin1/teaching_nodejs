// Request: Jo user krta hay.
// Response: Jo server se ata hay

// Get aur Delete my kabhi bhi body nhi jaati. Yatw Params or query
// PUT, PATCH or POST may body jaati hay

const userSignup = (req, res) => {
  try {
    console.log("req.body", req.body);
    const firstName = req.body.firstName;
    return res.send(`This is API Created By ${firstName}`);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};

module.exports = {
  userSignup,
};
