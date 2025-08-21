const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/db");

const fixedRoutes = require("./routes/fixedRoutes");
const customRoutes = require("./routes/customRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/fixed", fixedRoutes);
app.use("/custom", customRoutes);

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
