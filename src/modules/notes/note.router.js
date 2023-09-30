import { Router } from "express";
import getAllNotes from "./Controller/GetAllNotes.js";
import addnotes from "./Controller/AddNotes.js";
import DeleteNote from "./Controller/deletNote.js";
import updatenote from "./Controller/updateNote.js";
import getallnoteswithowners from "./Controller/getallnoteswithowners.js";
import SortNotes from "./Controller/SortNotes.js";
const router =Router()

router.get('/', getAllNotes)
router.get('/withowners', getallnoteswithowners)
router.get('/SortNotes', SortNotes)
router.post('/Addnotes', addnotes)
router.put('/updatenote', updatenote)
router.delete('/DeleteNote', DeleteNote)



export default router