const FixedExtension = require("../models/FixedExtension");

exports.getFixedExtensions = async (req, res) => {
  try {
    const data = await FixedExtension.getAllDatas();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateFixedExtensions = async (req, res) => {
  const { id } = req.params;
  const { is_checked } = req.body;

  try {
    await FixedExtension.updateStatus(id, is_checked);
    res.json({ message: "Updated Success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
