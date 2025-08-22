import axios from "axios";

/* 고정 확장자 */
const API_URL = process.env.REACT_APP_API_FIXED;

export const getFixedExtensions = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const updateFixedExtensions = async (id, checked) => {
  const res = await axios.patch(`${API_URL}/${id}`, {
    checked: checked ? 1 : 0,
  });
  return res.data;
};
