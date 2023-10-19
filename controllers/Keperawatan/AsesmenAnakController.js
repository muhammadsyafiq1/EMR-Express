import db from "../../config/Database.js"
import AsesmenAnak from "../../models/keperawatan/AsesmenAnak.js"

export const getAll = async (req,res) => {
    try {
        const response = await AsesmenAnak.findAll()
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}

export const Store = async (req, res) => {
    const t = await db.transaction()
    try {
        const {
            norm,
            notr,
            lama_kehamilan,
            waktu_kelahiran,
            komplikasi_kehamilan,
            keterangan_komplikasi_kehamilan,
            riwayat_natal,
            keterangan_riwayat_natal,
            riwayat_post_natal,
            keterangan_riwayat_post_natal,
            orang_terdekat_anak,
            lainnya_orang_terdekat_anak,
            pendamping_anak,
            lainnya_pendamping_anak,
            anak_merasa_terpisah,
            anak_dirawat_sebelumnya,
            reaksi_anak,
            lainnya_reaksi_anak,
            cemas,
            kecemasan_lainnya,
            pengasuh_anak,
            lainnya_pengasuh_anak,
            pembawaan_anak,
            lainnya_pembawaan_anak,
            tempramen,
            lainnya_tempramen,
            kebiasaan_prilaku_unik,
            lainnya_kebiasaan_prilaku_unik,
            riwayat_imunisasi,
            lainnya_riwayat_imunisasi,
        } = 
        req.body

        await AsesmenAnak.create({
            norm: norm,
            notr: notr,
            lama_kehamilan: lama_kehamilan,
            waktu_kelahiran: waktu_kelahiran,
            komplikasi_kehamilan: komplikasi_kehamilan,
            keterangan_komplikasi_kehamilan: keterangan_komplikasi_kehamilan,
            riwayat_natal: riwayat_natal,
            keterangan_riwayat_natal: keterangan_riwayat_natal,
            riwayat_post_natal: riwayat_post_natal,
            keterangan_riwayat_post_natal: keterangan_riwayat_post_natal,
            orang_terdekat_anak: orang_terdekat_anak,
            lainnya_orang_terdekat_anak: lainnya_orang_terdekat_anak,
            pendamping_anak: pendamping_anak,
            lainnya_pendamping_anak: lainnya_pendamping_anak,
            anak_merasa_terpisah: anak_merasa_terpisah,
            anak_dirawat_sebelumnya: anak_dirawat_sebelumnya,
            reaksi_anak: reaksi_anak,
            lainnya_reaksi_anak: lainnya_reaksi_anak,
            cemas: cemas,
            kecemasan_lainnya: kecemasan_lainnya,
            pengasuh_anak: pengasuh_anak,
            lainnya_pengasuh_anak: lainnya_pengasuh_anak,
            pembawaan_anak: pembawaan_anak,
            lainnya_pembawaan_anak: lainnya_pembawaan_anak,
            tempramen: tempramen,
            lainnya_tempramen: lainnya_tempramen,
            kebiasaan_prilaku_unik: kebiasaan_prilaku_unik,
            lainnya_kebiasaan_prilaku_unik: lainnya_kebiasaan_prilaku_unik,
            riwayat_imunisasi: riwayat_imunisasi,
            lainnya_riwayat_imunisasi: lainnya_riwayat_imunisasi,
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
        const data = await AsesmenAnak.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!data){
            return res.status(404).json({ msg: "Data tidak ada!" });
        }
        await AsesmenAnak.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({msg: "Data berhasil dihapus"})
    } catch (error) {
        console.log(error)
    }
}

export const Update = async (req, res) => {
    const t = await db.transaction()
    try {
        const data = await AsesmenAnak.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!data){
            return res.status(401).json({msg: "Data tidak ada"})
        }
        const {
            norm,
            notr,
            lama_kehamilan,
            waktu_kelahiran,
            komplikasi_kehamilan,
            keterangan_komplikasi_kehamilan,
            riwayat_natal,
            keterangan_riwayat_natal,
            riwayat_post_natal,
            keterangan_riwayat_post_natal,
            orang_terdekat_anak,
            lainnya_orang_terdekat_anak,
            pendamping_anak,
            lainnya_pendamping_anak,
            anak_merasa_terpisah,
            anak_dirawat_sebelumnya,
            reaksi_anak,
            lainnya_reaksi_anak,
            cemas,
            kecemasan_lainnya,
            pengasuh_anak,
            lainnya_pengasuh_anak,
            pembawaan_anak,
            lainnya_pembawaan_anak,
            tempramen,
            lainnya_tempramen,
            kebiasaan_prilaku_unik,
            lainnya_kebiasaan_prilaku_unik,
            riwayat_imunisasi,
            lainnya_riwayat_imunisasi,
        } = 
        req.body

        await AsesmenAnak.update({
            norm: norm,
            notr: notr,
            lama_kehamilan: lama_kehamilan,
            waktu_kelahiran: waktu_kelahiran,
            komplikasi_kehamilan: komplikasi_kehamilan,
            keterangan_komplikasi_kehamilan: keterangan_komplikasi_kehamilan,
            riwayat_natal: riwayat_natal,
            keterangan_riwayat_natal: keterangan_riwayat_natal,
            riwayat_post_natal: riwayat_post_natal,
            keterangan_riwayat_post_natal: keterangan_riwayat_post_natal,
            orang_terdekat_anak: orang_terdekat_anak,
            lainnya_orang_terdekat_anak: lainnya_orang_terdekat_anak,
            pendamping_anak: pendamping_anak,
            lainnya_pendamping_anak: lainnya_pendamping_anak,
            anak_merasa_terpisah: anak_merasa_terpisah,
            anak_dirawat_sebelumnya: anak_dirawat_sebelumnya,
            reaksi_anak: reaksi_anak,
            lainnya_reaksi_anak: lainnya_reaksi_anak,
            cemas: cemas,
            kecemasan_lainnya: kecemasan_lainnya,
            pengasuh_anak: pengasuh_anak,
            lainnya_pengasuh_anak: lainnya_pengasuh_anak,
            pembawaan_anak: pembawaan_anak,
            lainnya_pembawaan_anak: lainnya_pembawaan_anak,
            tempramen: tempramen,
            lainnya_tempramen: lainnya_tempramen,
            kebiasaan_prilaku_unik: kebiasaan_prilaku_unik,
            lainnya_kebiasaan_prilaku_unik: lainnya_kebiasaan_prilaku_unik,
            riwayat_imunisasi: riwayat_imunisasi,
            lainnya_riwayat_imunisasi: lainnya_riwayat_imunisasi,
        }, {
            where: {id: req.params.id},
            transaction: t
        })

        await t.commit()
        res.status(201).json({msg: "Asesmen nyeri berhasil diupdate"})
    } catch (error) {
        await t.rollback()
        res.status(500).json({msg: "Terjadi kesalahan sistem"})
    }
}

export const getNormNotr = async (req, res) => {
    try {
        const response = await AsesmenAnak.findOne({
            where: {
                norm: req.params.norm,
                notr: req.params.notr
            }
        })

        if(!response){
            return res.status(201).json({msg: "data tidak ada"})
        }

        res.json(response)

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Terjadi kesalahan sistem" });
    }
}



