import axios from "axios";

const API_URL = "http://localhost:5001/custom";

export const getCustomExtensions = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addCustomExtensions = async (customName) => {
  const res = await axios.post(API_URL, { customName });
  return res.data;
};

export const deleteCustomExtension = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
