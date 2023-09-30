import { Router } from "express";
import getalluser from "./controller/getusers.js";
import signup from "./controller/Signup.js";
import signin from "./controller/Signin.js";
import updateUser from "./controller/updateUser.js";
import deleteuser from "./controller/Deleteuser.js";
import searchuser from "./controller/Search.js";
import userWithNote from "./controller/GetuserWithNote.js";
import ageBetween from "./controller/ageBetween.js";
const router = Router();

router.get("/", getalluser);
router.post("/signup", signup);
router.post("/signin", signin);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteuser);
router.get("/search", searchuser);
router.get('/age_between/', ageBetween)
router.get('/userWithNote/:id', userWithNote)

export default router;
