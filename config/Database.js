import { Sequelize } from "sequelize"

const db = new Sequelize('emr','root', '',{
    host: "localhost",
    dialect: "mysql"
})

export default db