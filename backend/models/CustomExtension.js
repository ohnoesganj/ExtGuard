const db = require("../config/db");

const CustomExtension = {
  getAllDatas: async () => {
    const [rows] = await db.query("SELECT * FROM custom_extensions");
    return rows;
  },
  addData: async (customName) => {
    await db.query("INSERT INTO custom_extensions (customName) VALUES (?)", [
      customName,
    ]);
  },
  deleteData: async (id) => {
    await db.query("DELETE FROM custom_extensions WHERE id = ?", [id]);
  },
};

module.exports = CustomExtension;
