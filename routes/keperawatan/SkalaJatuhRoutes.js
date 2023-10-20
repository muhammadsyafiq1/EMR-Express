import express from "express"
import { DeleteSkalaJatuh, Show, StoreIntervensi, StoreSkalaJatuh } from "../../controllers/Keperawatan/SkalaJatuhController.js"
const router = express.Router()

router.post('/skala-jatuh-store', StoreSkalaJatuh)
router.delete('/skala-jatuh-delete/:id', DeleteSkalaJatuh)
router.post('/intervensi-store', StoreIntervensi)
router.get('/show/:norm/:notr', Show)

export default router
