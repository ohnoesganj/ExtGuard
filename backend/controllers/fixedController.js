const FixedExtension = require("../models/FixedExtension");

/* 고정 확장자 */

/* 조회 */
exports.getFixedExtensions = async (req, res) => {
  try {
    const data = await FixedExtension.getAllDatas();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* 수정 */
exports.updateFixedExtensions = async (req, res) => {
  const { id } = req.params;
  let { checked } = req.body;

  checked = checked ? 1 : 0;

  try {
    await FixedExtension.updateStatus(id, checked);
    res.json({ message: "Updated Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
