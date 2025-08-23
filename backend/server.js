const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/db");

const fixedRoutes = require("./routes/fixedRoutes");
const customRoutes = require("./routes/customRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/fixed", fixedRoutes);
app.use("/api/custom", customRoutes);

// app.get("*", (req, res, next) => {
//   if (req.path.startsWith("/api/")) return next();

//   res.sendFile(
//     path.join(__dirname, "../frontend/build", "index.html"),
//     (err) => {
//       if (err) next(err);
//     }
//   );
// });

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.PORT || 5001, "0.0.0.0", () => {
    console.log(`Server running on port ${process.env.PORT || 5001}`);
  });
}

module.exports = app;
