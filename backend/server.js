const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./config/db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/db-test", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS result");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
