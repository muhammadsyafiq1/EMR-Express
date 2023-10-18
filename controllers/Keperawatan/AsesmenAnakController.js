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

