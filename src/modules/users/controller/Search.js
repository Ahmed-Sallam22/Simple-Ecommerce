import userModel from "../../../../DB/model/User.model.js";

const searchuser = async (req, res) => {
  try {
    const { char, age } = req.body;
    const users = await userModel.find({
      firstName:{ $regex: `^${char}`, $options: "i" },
      age: { $lt: age },
    });
    return res.json({ message: "Done", users });
  } catch (err) {
    return res.json({ message: "Catch Error", err, stack: err.stack });
  }
};

export default searchuser;
