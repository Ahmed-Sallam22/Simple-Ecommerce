import userModel from "../../../../DB/model/User.model.js";

const getalluser = async (req, res) => {
  try {
    const users = await userModel.find();
    return res.json({ message: "Done", users });
  } catch (err) {
    return res.json({ message: "Catch Error", err, stack: err.stack });
  }
};

export default getalluser;
