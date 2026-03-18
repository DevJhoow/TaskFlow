# 🚀 TaskFlow

Sistema de gerenciamento de tarefas desenvolvido com arquitetura full-stack.

## 📌 Sobre o projeto

O TaskFlow é uma aplicação web que permite criar, visualizar, editar e excluir tarefas, simulando um ambiente real de gestão interna de atividades.

O objetivo do projeto é demonstrar na prática conceitos de desenvolvimento full-stack, integração de API e manipulação de dados.

---

## 🧠 Arquitetura

Frontend → Backend → Banco de Dados

- Frontend: React
- Backend: Node.js + Express
- Banco de Dados: SQLite

---

## ⚙️ Funcionalidades

- ✅ Criar tarefas
- 📋 Listar tarefas
- ✏️ Editar tarefas
- 🗑️ Deletar tarefas
- 🔄 Atualização automática da interface

---

## 🔗 API (Rotas)

| Método | Rota              | Descrição            |
|--------|------------------|---------------------|
| GET    | /api/tasks       | Listar tarefas      |
| POST   | /api/tasks       | Criar tarefa        |
| PUT    | /api/tasks/:id   | Atualizar tarefa    |
| DELETE | /api/tasks/:id   | Deletar tarefa      |

---

## 🛠️ Tecnologias utilizadas

- React
- Axios
- Node.js
- Express
- SQLite

---

## ▶️ Como rodar o projeto

### Backend

```bash
cd backend
npm install
node server.js
