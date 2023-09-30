import connectDB from "../DB/Connection.js";
import userRouter from "./modules/users/users.router.js";
import noteRouter from "./modules/notes/note.router.js";
const bootstrap = (app, express) => {
  app.use(express.json());
  app.use("/user", userRouter);

  app.use("/note", noteRouter);

  app.use("*", (req, res) => {
    return res.json({ message: "in-valid Routing" });
  });
  //
  connectDB();
};

export default bootstrap;
