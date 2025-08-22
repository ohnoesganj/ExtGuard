const express = require("express");
const router = express.Router();
const fixedController = require("../controllers/fixedController");

/* 고정 확장자 */

router.get("/", fixedController.getFixedExtensions);
router.patch("/:id", fixedController.updateFixedExtensions);

module.exports = router;
