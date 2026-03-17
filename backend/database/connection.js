const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./database/tasks.db", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco", err)
  } else {
    console.log("Banco de dados conectado")
  }
})

module.exports = db