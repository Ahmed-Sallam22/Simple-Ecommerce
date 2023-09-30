import { noteModel } from "../../../../DB/model/note.model.js";

const getallnoteswithowners = async (req, res) => {
  try {
    const notes = await noteModel.find().populate("userID");
    return res.json({ message: "Done", notes });
  } catch (err) {
    return res.json({ message: "Catch Error", err, stack: err.stack });
  }
};

export default getallnoteswithowners;
