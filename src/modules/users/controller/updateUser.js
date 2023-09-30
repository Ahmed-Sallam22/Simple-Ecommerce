import userModel from "../../../../DB/model/User.model.js";

const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, age } = req.body;
    const { id } = req.params;
    const users = await userModel.findOneAndUpdate(
      { _id: id },
      { age, firstName, lastName },
      { new: true }
    );
    if (!users) {
      return res.json({ message: "In-valid id" });
    }
    return res.json({ message: "Done", users });
  } catch (err) {
    return res.json({ message: "Catch Error", err });
  }
};
export default updateUser;
