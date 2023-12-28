import db from "../../config/Database.js"
import ParentTable from "../../models/ibs/CatatanAnestasi.js"
import CatatanAnestasiPraInduksi from "../../models/ibs/CatatanAnestasiPraInduksi.js"

export const storeLembar = async (req, res) => {
    const t = await db.transaction()
    try {
        const {
            norm,
            notr,
            username,
            tanggal
        } = req.body

        await ParentTable.create({
            norm:norm,
            notr:notr,
            username:username,
            tanggal:tanggal,
        }, {transaction: t})
        await t.commit()
        res.status(201).json({msg: "Lembar berhasil dibuat"})
    } catch (error) {
        await t.rollback()
        res.status(500).json({ msg: error.message })
    }
}

export const storePraInduksi = async (req, res) => {
    const t = await db.transaction();

    try {
        await CatatanAnestasiPraInduksi.create(req.body, { transaction: t });
        await t.commit();

        res.status(201).json({ msg: "Pra Induksi berhasil dibuat" });
    } catch (error) {
        await t.rollback();
        res.status(500).json({ msg: error.message });
    }
};

export const listLembar = async (req,res) => {
    try {
        const lembar = await ParentTable.findAll({
            where: {norm: req.body.norm},
        })
        res.status(201).json({ lembar: lembar});
        res.json(lembar)
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const showCatatanAnestasi = async (req,res) => {
    try {
        const catatanAnestasi = await ParentTable.findOne({
            where: { id: req.body.catatan_anestasi_id },
            include: {
                model: CatatanAnestasiPraInduksi,
                as: 'CatatanAnestasiPraInduksi',
            },
        });
        res.status(201).json({ data: catatanAnestasi});
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
