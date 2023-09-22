const express = require("express");
const prisma = require("./database");

// const app = express();
express().use(express.json());

express().get("/items", async (req, res) => {
  const users = await prisma.item.findMany();
  if (users.length > 0) return res.status(200).send(users);
  return res.send("No users found");
});

// express().post("/item", async (req, res) => {
//   const { name } = req.body;
//   await prisma.item.create({
//     data: {
//       name,
//     },
//   });
//   return res.sendStatus(201);
// });

// app.delete("/item/:id", async (req, res) => {
//   const { id } = req.params;
//   await prisma.item.delete({
//     where: {
//       id: Number(id),
//     },
//   });
//   return res.sendStatus(200);
// });

// app.put("/items/:id", async (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   await prisma.item.update({
//     where: {
//       id: Number(id),
//     },
//     data: {
//       name,
//     },
//   });
//   return res.sendStatus(200);
// });

// app.get("/item/:name", async (req, res) => {
//   const { name } = req.params;
//   const user = await prisma.item.findMany({
//     where: {
//       name: name,
//     },
//   });
//   if (user.length > 0) return res.status(200).send(user);
//   return res.send("No user found");
// });

const port = 5000;
express().listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
