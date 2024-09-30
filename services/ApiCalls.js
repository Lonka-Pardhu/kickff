import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const loginUser = async (values) => {
  return await axios.post(`${API_URL}/login`, values, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
