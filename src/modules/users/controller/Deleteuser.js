import userModel from "../../../../DB/model/User.model.js";

const deleteuser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await userModel.deleteMany({ _id: id });
    if (!users) {
      return res.json({ message: "In-valid id" });
    }
    return res.json({ message: "Done", users });
  } catch (err) {
    return res.json({ message: "Catch Error", err, stack: err.stack });
  }
};

export default deleteuser;
