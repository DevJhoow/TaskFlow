const db = require("../database/connection")

exports.getTasks = (req, res) => {
  const sql = "SELECT * FROM tasks"

  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message })
      return
    }

    res.json(rows)
  })
}

exports.createTask = (req, res) => {
  const { titulo, descricao, responsavel, status } = req.body

  const sql = `
    INSERT INTO tasks (titulo, descricao, responsavel, status)
    VALUES (?, ?, ?, ?)
  `

  db.run(sql, [titulo, descricao, responsavel, status], function (err) {
    if (err) {
      res.status(500).json({ error: err.message })
      return
    }

    res.json({ message: "Tarefa criada", id: this.lastID })
  })
}

exports.updateTask = (req, res) => {
  const { id } = req.params
  const { titulo, descricao, responsavel, status } = req.body

  const sql = `
    UPDATE tasks
    SET titulo = ?, descricao = ?, responsavel = ?, status = ?
    WHERE id = ?
  `

  db.run(sql, [titulo, descricao, responsavel, status, id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message })
      return
    }

    res.json({ message: "Tarefa atualizada" })
  })
}

exports.deleteTask = (req, res) => {
  const { id } = req.params

  const sql = "DELETE FROM tasks WHERE id = ?"

  db.run(sql, [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message })
      return
    }

    res.json({ message: "Tarefa deletada" })
  })
}