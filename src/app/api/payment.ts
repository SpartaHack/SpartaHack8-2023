import axios from "axios";
axios.defaults.withCredentials = true;
export const API_URL = process.env.SERVER_API_URL;

export const checkoutSession = async (userId: string, frequency: string) => {
  const data = {
    user_id: userId,
    frequency: frequency,
  };

  try {
    const response = await axios.post(`${API_URL}/payment/checkout`, data);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getPortalLink = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/payment/portal/${userId}`);
    return response;
  } catch (err) {
    console.log(err);
  }
};
