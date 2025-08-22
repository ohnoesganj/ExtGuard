const CustomExtension = require("../models/CustomExtension");
const { validateExtension } = require("../utils/validateExtension");

/* 커스텀 확장자 */

/* 조회 */
exports.getCustomExtensions = async (req, res) => {
  try {
    const data = await CustomExtension.getAllDatas();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* 삽입 */
exports.addCustomExtensions = async (req, res) => {
  const { customName } = req.body;

  if (!validateExtension(customName))
    return res.status(400).json({ error: "Invalid Extension Name" });

  try {
    await CustomExtension.addData(customName);
    res.json({ message: "Added Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* 삭제 */
exports.deleteCustomExtension = async (req, res) => {
  const { id } = req.params;

  try {
    await CustomExtension.deleteData(id);
    res.json({ message: "Deleted Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
