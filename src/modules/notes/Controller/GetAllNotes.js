import { noteModel } from "../../../../DB/model/note.model.js";

const getAllNotes = async (req, res) => {
  try {
    const notes = await noteModel.find();
    return res.json({ message: "Done", notes });
  } catch (err) {
    return res.json({ message: "Catch Error", err, stack: err.stack });
  }
};

export default getAllNotes;
