import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import fileUpload from "express-fileupload"
import db from "./config/Database.js"

//ROUTES
import AsesmenNyeriRoutes from "./routes/keperawatan/AsesmenNyeriRoutes.js"
import AsesmenAnakRoutes from "./routes/keperawatan/AsesmenAnakRoutes.js"
import SkalaJatuhRoutes from "./routes/keperawatan/SkalaJatuhRoutes.js"
import CatatanAnestasiRoutes from "./routes/ibs/CatatanAnestasiRoutes.js"

//MODELS
import AsesmenNyeri from "./models/keperawatan/AsesmenNyeri.js"
import AsesmenAnak from "./models/keperawatan/AsesmenAnak.js"
import SkalaJatuh from "./models/keperawatan/SkalaJatuh.js"
import IntervensiSkalaJatuh from "./models/keperawatan/IntervensiSkalaJatuh.js"
import SkalaJatuhDewasa from "./models/keperawatan/SkalaJatuhDewasa.js"
import IntervensiSkalaJatuhDewasa from "./models/keperawatan/IntervensiSkalaJatuhDewasa.js"
import ParentTable from "./models/ibs/CatatanAnestasi.js"
import CatatanAnestasiPraInduksi from "./models/ibs/CatatanAnestasiPraInduksi.js"

const app = express()

app.use(cookieParser()) //Middleware utk menagmbil value dari cookie

app.use(cors({
    credentials: true,
    origin: 'http://localhost/3000' // Mengatur domain yang diizinkan untuk akses API
}))

app.use(express.json()) //Middleware agar bisa menerima data dlm bentuk json

app.use(fileUpload())

app.use(AsesmenNyeriRoutes)
app.use(AsesmenAnakRoutes)
app.use(SkalaJatuhRoutes)
app.use(CatatanAnestasiRoutes)

try {
    await db.authenticate() //menghubungkan ke db
    console.log("Berhasil terkoneksi")
    // await CatatanAnestasiPraInduksi.sync()

} catch (error) {
    console.log(error);
}

app.listen(6000, () => {
    console.log('Server running on port 5000');
})