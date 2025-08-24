const CustomExtension = require("../models/CustomExtension");
const { validateExtension } = require("../utils/validateExtension");

/* 커스텀 확장자 */

/* 조회 */
exports.getCustomExtensions = async (req, res) => {
  const data = await CustomExtension.getAllDatas();
  res.json(data);
};

/* 삽입 */
exports.addCustomExtensions = async (req, res) => {
  const { customName } = req.body;

  if (!validateExtension(customName))
    return res.status(400).json({ error: "Invalid Extension Name" });

  await CustomExtension.addData(customName);
  res.json({ message: "Added Successfully" });
};

/* 삭제 */
exports.deleteCustomExtension = async (req, res) => {
  const { id } = req.params;
  await CustomExtension.deleteData(id);
  res.json({ message: "Deleted Successfully" });
};
