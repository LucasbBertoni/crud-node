const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("nodesequelize", "root", "Password", {
    host: "localhost",
    dialect: "mysql"
})

// try {
//     sequelize.authenticate()
//     console.log("Conectamos com sucesso")
// } catch (err) {
//     console.log("Não foi possível conectar: ", error)
// }

module.exports = sequelize