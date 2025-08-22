const express = require("express");
const router = express.Router();
const customController = require("../controllers/customController");

/* 커스텀 확장자 */
router.get("/", customController.getCustomExtensions);
router.post("/", customController.addCustomExtensions);
router.delete("/:id", customController.deleteCustomExtension);

module.exports = router;
