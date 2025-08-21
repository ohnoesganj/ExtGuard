const express = require("express");
const router = express.Router();
const fixedController = require("../controllers/fixedController");

router.get("/", fixedController.getFixedExtensions);
router.patch("/:id", fixedController.updateFixedExtensions);

module.exports = router;
