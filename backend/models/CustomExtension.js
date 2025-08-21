const db = require("../config/db");

const CustomExtension = {
  getAllDatas: async () => {
    const [rows] = await db.query("SELECT * FROM custom_extensions");
    return rows;
  },
  addData: async () => {
    await db.query("INSERT INTO custom_extensions (custom_name) VALUES (?)", [
      custom_name,
    ]);
  },
  deleteData: async () => {
    await db.query("DELETE FROM cunstom_extensions WHERE id = ?", [id]);
  },
};

module.exports = CustomExtension;
