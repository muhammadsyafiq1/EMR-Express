import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import fileUpload from "express-fileupload"
import db from "./config/Database.js"
import AsesmenNyeriRoutes from "./routes/keperawatan/AsesmenNyeriRoutes.js"
import AsesmenAnakRoutes from "./routes/keperawatan/AsesmenAnakRoutes.js"
import AsesmenNyeri from "./models/keperawatan/AsesmenNyeri.js"
import AsesmenAnak from "./models/keperawatan/AsesmenAnak.js"

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

try {
    await db.authenticate() //menghubungkan ke db
    console.log("Berhasil terkoneksi")
    // await AsesmenNyeri.sync()
    await AsesmenAnak.sync()
} catch (error) {
    console.log(error);
}

app.listen(6000, () => {
    console.log('Server running on port 5000');
})