import express from "express"
import { Delete, Store, Update, getAll, getNormNotr } from "../../controllers/Keperawatan/AsesmenAnakController.js"
const router = express.Router()

router.get('/asesmen-anak', getAll)
router.post('/asesmen-anak-store', Store)
router.delete('/asesmen-anak-delete/:id', Delete)
router.put('/asesmen-anak-update/:id', Update)
router.get('/asesmen-anak/:norm/:notr', getNormNotr)

export default router