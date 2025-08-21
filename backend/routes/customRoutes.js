const express = require("express");
const router = express.Router();
const customController = require("../controllers/customController");

router.get("/", customController.getCustomExtensions);
router.post("/", customController.addCustomExtensions);
router.delete("/:id", customController.deleteCustomExtension);

module.exports = router;
