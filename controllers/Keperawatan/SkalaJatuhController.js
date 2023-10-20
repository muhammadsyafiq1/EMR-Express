import db from "../../config/Database.js"
import SkalaJatuh from "../../models/keperawatan/SkalaJatuh.js"
import IntervensiSkalaJatuh from "../../models/keperawatan/IntervensiSkalaJatuh.js"

export const StoreSkalaJatuh = async (req,res) => {
    const usia = req.body.usia == 1 ? 4 : req.body.usia == 2 ? 3 : req.body.usia == 3 ? 2 : req.body.usia == 4 ? 1 : 0;
    const jenis_kelamin = req.body.jenis_kelamin == 1 ? 2 : 1;
    const diagnosa = req.body.diagnosa == 1 ? 4 : req.body.diagnosa == 2 ? 3 : req.body.diagnosa == 3 ? 2 : req.body.diagnosa == 4 ? 1 : 0;
    const faktor_lingkungan = req.body.faktor_lingkungan == 1 ? 4 : req.body.faktor_lingkungan == 2 ? 3 : req.body.faktor_lingkungan == 3 ? 2 : req.body.faktor_lingkungan == 4 ? 1 : 0;
    const respon = req.body.respon == 1 ? 3 : req.body.respon == 2 ? 2 : req.body.respon == 3 ? 1 : 0;
    const medikasi_terapi = req.body.medikasi_terapi == 1 ? 3 : req.body.medikasi_terapi == 2 ? 2 : req.body.medikasi_terapi == 3 ? 1 : 0;

    // console.log(usia, jenis_kelamin, diagnosa, faktor_lingkungan, respon, medikasi_terapi);
  
    const skor_array = [usia, jenis_kelamin, diagnosa, faktor_lingkungan, respon, medikasi_terapi];
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

export const DeleteSkalaJatuh = async (req,res) => {
    try {
        const data = await SkalaJatuh.findOne({
            where:{
                id: req.params.id
            }
        });

        if(!data){
            return res.status(404).json({message: "Data tidak ada"})
        }

        await SkalaJatuh.destroy({
            where:{
                id: req.params.id
            }
        })
        return res.status(201).json({msg: "Data berhasil dihapus"})
    } catch (error) {
        console.log(error);
    }
}

export const StoreIntervensi = async (req, res) => {

    // Contoh Array
    const arrayIntervensi = [
        { intervensi: "Intervensi 1" },
        { intervensi: "Intervensi 2" },
        { intervensi: "Intervensi 3" },
    ];
      
    const t = await db.transaction()
    try {
        // const arrayIntervensi = req.body.intervensi;
        if (Array.isArray(arrayIntervensi)) {
            for (const row of arrayIntervensi) {
              await IntervensiSkalaJatuh.create({
                skala_jatuh_id: req.body.skala_jatuh_id,
                sift: req.body.sift,
                intervensi: row.intervensi || null,
              }, {transaction: t});
            }
          }
      
        await t.commit()
        res.status(201).json({msg: "Intervensi skala jatuh berhasil ditambahkan"})
    } catch (error) {
        
        await t.rollback()
        console.log(error);
    }
}

export const Show = async (req, res) => {
    try {
        const data = await SkalaJatuh.findOne({
            where: { norm: req.params.norm, notr: req.params.notr },
            include: {
                model: IntervensiSkalaJatuh,
                as: 'IntervensiSkalaJatuh',
            }
        });
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}
