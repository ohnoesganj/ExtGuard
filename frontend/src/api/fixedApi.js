import axios from "axios";

const API_URL = "http://localhost:5001/fixed";

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
