import { noteModel } from "../../../../DB/model/note.model.js";

const updatenote = async (req, res) => {
  try {
    const { id, userID } = req.body;
    const Note = await noteModel.findOne({ _id: id, userID: userID });
    console.log(Note);
    if (!Note) {
      return res.json({ message: "Note Not Found" });
    }
    Note.tittel = req.body.tittel;
    Note.content = req.body.content;
    await Note.save();
    return res.json({ message: "Done", Note });
  } catch {
    return res.json({ message: "Catch Error", err, stack: err.stack });
  }
};

export default updatenote;
