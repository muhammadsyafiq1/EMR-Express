import express from "express"
import { DeleteIntervensi, DeleteSkalaJatuh, Show, StoreIntervensi, StoreSkalaJatuh } from "../../controllers/Keperawatan/SkalaJatuhController.js"
const router = express.Router()

router.post('/skala-jatuh-store', StoreSkalaJatuh)
router.delete('/skala-jatuh-delete/:id', DeleteSkalaJatuh)
router.post('/intervensi-store', StoreIntervensi)
router.get('/show/:norm/:notr', Show)
router.get('/delete-intervensi/:id', DeleteIntervensi)

export default router
