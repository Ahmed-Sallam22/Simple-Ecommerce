import userModel from "../../../../DB/model/User.model.js";
import { noteModel } from "../../../../DB/model/note.model.js";

const DeleteNote = async (req, res) => {
  try {
    const { _id, userID } = req.body;
    const note = await noteModel.findOne({ _id: _id });
    if (!note) {
      return res.json({ message: "Note Not Found" });
    }
    if (userID != note.userID) {
      return res.json({ message: "You are not allowed to Delete this Note" });
    }
    await noteModel.deleteOne({ _id: note._id });
    const user = await userModel.findById(userID);
    console.log(user);
    user.notes.remove(_id);
    await user.save();
    return res.json({ message: "Done" });
  } catch (err) {
    return res.json({ message: "Catch Error", err, stack: err.stack });
  }
};
export default DeleteNote;
