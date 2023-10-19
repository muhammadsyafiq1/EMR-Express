import express from "express"
import { StoreSkalaJatuh } from "../../controllers/Keperawatan/SkalaJatuhController.js"
const router = express.Router()

router.post('skala-jatuh-store', StoreSkalaJatuh)

export default router
