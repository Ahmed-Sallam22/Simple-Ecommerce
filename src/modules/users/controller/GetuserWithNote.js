import userModel from "../../../../DB/model/User.model.js";

const userWithNote = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel
      .findById(id)
      .populate("notes", "tittel content  userID -_id");
    if (!user) {
      return res.json({ message: "In-valid id" });
    }
    return res.json({ message: "Done", user });
  } catch (err) {
    return res.json({ message: "Catch Error", err, stack: err.stack });
  }
};
export default userWithNote;
