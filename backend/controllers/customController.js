const CustomExtension = require("../models/CustomExtension");
const { validateExtension } = require("../utils/validateExtension");

exports.getCustomExtensions = async (req, res) => {
  try {
    const data = await CustomExtension.getAllDatas();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addCustomExtensions = async (req, res) => {
  const { custom_name } = req.body;

  if (!validateExtension(custom_name))
    return res.status(400).json({ error: "Invalid Extension Name" });

  try {
    await CustomExtension.addData(custom_name);
    res.json({ message: "Added Success" });
  } catch (err) {
    res.status(500).message({ error: err.message });
  }
};

exports.deleteCustomExtension = async (req, res) => {
  const { id } = req.params;

  try {
    await CustomExtension.deleteData(id);
    res.json({ message: "Deleted Success" });
  } catch (err) {
    res.status(500).message({ error: err.message });
  }
};
