import db from "../../config/Database.js"
import SkalaJatuh from "../../models/keperawatan/SkalaJatuh.js"
import IntervensiSkalaJatuh from "../../models/keperawatan/IntervensiSkalaJatuh.js"

export const StoreSkalaJatuh = async (req,res) => {
    const usia = req.body.usia == 1 ? 4 : req.body.usia == 2 ? 3 : req.body.usia == 3 ? 2 : req.body.usia == 4 ? 1 : 0;
    console.log(usia)
    const jk = req.body.jk == 1 ? 2 : 1;
    const diagnosa = req.body.diagnosa == 1 ? 4 : req.body.diagnosa == 2 ? 3 : req.body.diagnosa == 3 ? 2 : req.body.diagnosa == 4 ? 1 : 0;
    const faktor_lingkungan = req.body.faktor_lingkungan == 1 ? 4 : req.body.faktor_lingkungan == 2 ? 3 : req.body.faktor_lingkungan == 3 ? 2 : req.body.faktor_lingkungan == 4 ? 1 : 0;
    const respon = req.body.respon == 1 ? 3 : req.body.respon == 2 ? 2 : req.body.respon == 3 ? 1 : 0;
    const medikasi_terapi = req.body.medikasi_terapi == 1 ? 3 : req.body.medikasi_terapi == 2 ? 2 : req.body.medikasi_terapi == 3 ? 1 : 0;
  
    const skor_array = [usia, jk, diagnosa, faktor_lingkungan, respon, medikasi_terapi];
    const total = skor_array.reduce((acc, val) => acc + val, 0);
    const t = await db.transaction()
    try {
        const {
            norm,
            notr,
            usia,
            jenis_kelamin,
            diagnosa,
            gangguan_kognitif,
            faktor_lingkungan,
            respon,
            medikasi_terapi,
        } = req.body;

        await SkalaJatuh.create({
            norm:norm, 
            notr:notr, 
            usia:usia, 
            jenis_kelamin:jenis_kelamin, 
            diagnosa:diagnosa, 
            gangguan_kognitif:gangguan_kognitif, 
            faktor_lingkungan:faktor_lingkungan, 
            respon:respon, 
            medikasi_terapi:medikasi_terapi, 
            total_skor: total,
        }, {transaction: t})

        await t.commit()
        res.status(201).json({msg: "Skala jatuh berhasil ditambahkan"})
    } catch (error) {
        await t.rollback()
        res.status(500).json({msg: "Terjadi kesalahan sistem"})
    }
}