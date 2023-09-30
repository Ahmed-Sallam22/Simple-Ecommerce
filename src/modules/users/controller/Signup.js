import userModel from "../../../../DB/model/User.model.js";
const signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      age,
      gender,
      phone,
    } = req.body;
    const existed = await userModel.findOne({
      $or: [{ phone }, { email }, { userName }],
    });
    if (existed?.email == email) {
      return res.json({ message: "Email Exist" });
    }
    if (existed?.phone == phone) {
      return res.json({ message: "phone Exist" });
    }
    if (existed?.userName == userName) {
      return res.json({ message: "userName Exist" });
    }
    const newUser = new userModel(req.body);
    await newUser.save();
    return res.json({ message: "Done", user: newUser });
  } catch (err) {
    return res.json({ message: "Catch Error", err, stack: err.stack });
  }
};
export default signup;
