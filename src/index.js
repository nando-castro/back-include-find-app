const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.get("/items", async (req, res) => {
  const users = await prisma.item.findMany();
  if (users.length > 0) return res.status(200).send(users);
  return res.send("No users found");
});

app.post("/item", async (req, res) => {
  const data = req.body;
  await prisma.item.create({
    data: {
      name: data.name,
    },
  });
  return res.sendStatus(201);
});

app.get("/item/:name", async (req, res) => {
  const name = req.params.name;
  const user = await prisma.item.findMany({
    where: {
      name: name,
    },
  });
  if (user.length > 0) return res.status(200).send(user);
  return res.send("No user found");
});

// Inicie o servidor na porta especificada
const server = app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});

module.exports = { app, server };
