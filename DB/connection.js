import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect(`mongodb://localhost:27017/assiments5`)
    .then((result) => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log("fail To Connect");
    });
};

export default connectDB;
