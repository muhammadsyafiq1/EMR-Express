import db from "../../config/Database.js"
import AsesmenNyeri from "../../models/keperawatan/AsesmenNyeri.js"


export const getAll = async (req, res) => {
    try {
        const response = await AsesmenNyeri.findAll()
        res.json(response)
    } catch (error) {
        console.log(error.message)
    }
}

export const Store = async (req, res) => {
    const t = await db.transaction()
    try {
        const { 
            tanggal,
            jam,
            provokasi,
            kualitas,
            lokasi,
            skala,
            waktu,
            intervensi
            } = 
        req.body;

        await AsesmenNyeri.create({
            tanggal: tanggal,
            jam: jam,
            provokasi: provokasi,
            kualitas: kualitas,
            lokasi: lokasi,
            skala: skala,
            waktu: waktu,
            intervensi: intervensi,
        }, {transaction: t})

        await t.commit()
        res.status(201).json({msg: "Asesmen nyeri berhasil ditambahkan"})
    } catch (error) {
        await t.rollback()
        res.status(500).json({msg: "Terjadi kesalahan sistem"})
    }
}

export const Delete = async (req,res) => {
    try {
        const data = await AsesmenNyeri.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!data) {
            return res.status(404).json({ msg: "Data tidak ada!" });
        }
        await AsesmenNyeri.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({msg: "Asesmen nyeri berhasil dihapus"})
    } catch (error) {
        console.log(error.message)
    }
}

export const Update = async (req, res) => {
    try {
        const data = await AsesmenNyeri.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!data) {
            return res.status(404).json({ msg: "Data tidak ada!" });
        }

        const { 
            tanggal,
            jam,
            provokasi,
            kualitas,
            lokasi,
            skala,
            waktu,
            intervensi
        } = req.body;

        const t = await db.transaction();

        await AsesmenNyeri.update({
            tanggal: tanggal,
            jam: jam,
            provokasi: provokasi,
            kualitas: kualitas,
            lokasi: lokasi,
            skala: skala,
            waktu: waktu,
            intervensi: intervensi,
        }, {
            where: { id: req.params.id },
            transaction: t
        });

        await t.commit();
        res.status(200).json({ msg: "Asesmen nyeri berhasil diupdate" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Terjadi kesalahan sistem" });
    }
}

export const getAsesmenNyeriNormNotr = async (req, res) => {
    try {
        const response = await AsesmenNyeri.findOne({
            where: {
                norm: req.params.norm,
                notr: req.params.notr
            }
        });

        if (!response) {
            return res.status(404).json({ msg: "Data tidak ditemukan" });
        }

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Terjadi kesalahan sistem" });
    }
}


