import mongoose, { model, Schema, Types } from "mongoose";
const noteSchema = new Schema(
  {
    tittel: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    userID: {
      type: Types.ObjectId,
      required: true,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);
export const noteModel = model("note", noteSchema);
