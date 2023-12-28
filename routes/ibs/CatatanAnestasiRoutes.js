import express from "express"
import {listLembar, showCatatanAnestasi, storeLembar, storePraInduksi } from "../../controllers/ibs/CatatanAnestasi.js"
const router = express.Router()

router.post('/create-lembar', storeLembar)
router.post('/create-pra-induksi', storePraInduksi)
router.get('/list-lembar', listLembar)
router.get('/show-catatan-anestasi', showCatatanAnestasi)

export default router
