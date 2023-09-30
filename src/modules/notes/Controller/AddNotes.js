import userModel from "../../../../DB/model/User.model.js";
import { noteModel } from "../../../../DB/model/note.model.js";

const addnotes = async (req, res) => {
  try {
    const { tittel, content, userID } = req.body;
    const checkUser = await userModel.findById(userID);
    if (!checkUser) {
      return res.json({ message: "User Not Found" });
    }
    const note = await noteModel.create({ tittel, content, userID });
    checkUser.notes.push(note._id);
    await checkUser.save();
    return res.json({ message: "Done", note });
  } catch (err) {
    return res.json({ message: "Catch Error", err, stack: err.stack });
  }
};
export default addnotes;
