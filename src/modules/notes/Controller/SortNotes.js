import { noteModel } from "../../../../DB/model/note.model.js";

const SortNotes = async (req, res) => {
  try {
    const notes = await noteModel
      .find()
      .sort({ createdAt: -1 })
      .populate("userID");
    return res.json({ message: "Done", notes });
  } catch (err) {
    return res.json({ message: "Catch Error", err, stack: err.stack });
  }
};

export default SortNotes;
