require("dotenv").config();
const express = require("express");
const db = require("./db");
const app = express();

app.get("/usuarios", async (req, res) => {
  const result = await db.query("SELECT * FROM usuarios");
  res.json(result.rows);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
