const FixedExtension = require("../models/FixedExtension");
const errorHandler = require("../utils/errorHandler");

/* 고정 확장자 */

/* 조회 */
exports.getFixedExtensions = async (req, res) => {
  const data = await FixedExtension.getAllDatas();
  res.json(data);
};

/* 수정 */
exports.updateFixedExtensions = async (req, res) => {
  const { id } = req.params;
  let { checked } = req.body;

  await FixedExtension.updateStatus(id, checked);
  res.json({ message: "Updated Successfully" });
};
