import express from "express"
import { getAll } from "../../controllers/Keperawatan/AsesmenAnakController.js"
const router = express.Router()

router.get('/asesmen-anak', getAll)

export default router