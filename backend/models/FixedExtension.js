const db = require("../config/db");

/* 고정 확장자 */
const FixedExtension = {
  getAllDatas: async () => {
    const [rows] = await db.query("SELECT * FROM fixed_extensions");
    return rows;
  },

  updateStatus: async (id, checked) => {
    await db.query("UPDATE fixed_extensions SET checked=? WHERE id=?", [
      checked,
      id,
    ]);
  },
};

module.exports = FixedExtension;
