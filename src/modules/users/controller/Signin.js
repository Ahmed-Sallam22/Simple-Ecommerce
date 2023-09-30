import userModel from "../../../../DB/model/User.model.js";

const signin = async (req, res) => {
  try {
    const { password, userInfo } = req.body;
    const check = await userModel.findOne({
      $or: [{
        email:userInfo,
        password:password
      },{
        userName:userInfo,
        password:password
      },{
        phone:userInfo,
        password:password
      }]
    });
    if (!check) {
      return res.json({ message: "In-valid Information" });
    }
    return res.json({
      message: `Welcome ${check.firstName} ${check.lastName}`,
      user: check,
    });
  } catch (err) {
    return res.json({ message: "Catch Error", err, stack: err.stack });
  }
};

export default signin;
