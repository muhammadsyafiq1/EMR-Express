import express from "express"
import { Delete, Store, Update, getAll, getAsesmenNyeriNormNotr } from "../../controllers/Keperawatan/AsesmenNyeriController.js"
const router  = express.Router()

router.get('/asesmen-nyeri', getAll)
router.post('/asesmen-nyeri-store', Store)
router.delete('/asesmen-nyeri-delete/:id', Delete)
router.put('/asesmen-nyeri-update/:id', Update)
router.get('/asesmen-nyeri/:norm/:notr', getAsesmenNyeriNormNotr)

export default router