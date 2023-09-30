import userModel from "../../../../DB/model/User.model.js";

const ageBetween = async (req, res) => {
  try {
    const { min, max } = req.body;
    const users = await userModel.find({
      age: { $gte: min, $lte: max },
    
    });
    console.log(req.body);
    return res.json({ message: "Done",users });

  } catch (err) {
    return res.json({ message: "Catch Error", err, stack: err.stack });
  }
};
export default ageBetween;
