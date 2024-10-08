import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const loginUser = async (values) => {
  return await axios.post(`${API_URL}/login`, values, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const signUpUser = async (values) => {
  return await axios.post(`${API_URL}/register`, values, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const verifyEmail = async (values) => {
  return await axios.post(`${API_URL}/verify-email`, values, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const sendEmailVerificationOtp = async (values) => {
  return await axios.post(`${API_URL}/send-email-varification-code`, values, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getProfile = async (token) => {
  return await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const forgotPass = async (values) => {
  return await axios.post(`${API_URL}/forget-password`, values, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const setNewPass = async (values, token) => {
  return await axios.post(`${API_URL}/set-password`, values, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfile = async (values, token) => {
  return await axios.post(`${API_URL}/update-profile`, values, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const changePassProfile = async (values, token) => {
  return await axios.post(`${API_URL}/change-password`, values, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
}; //! RE-check its not working

export const getSportPickems = async (values, token) => {
  return await axios.post(`${API_URL}/get-sport-pickems`, values, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getSports = async (token) => {
  return await axios.get(`${API_URL}/get-sports`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const setSportOrder = async (formData, token) => {
  return await axios.post(`${API_URL}/set-sports-order`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
