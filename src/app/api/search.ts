import axios from "axios";
axios.defaults.withCredentials = true;
export const API_URL = process.env.SERVER_API_URL;

export const searchAll = async (
  page: number,
  pageSize: number,
  query: string,
  userId: string,
) => {
  const data = {
    page: page,
    page_size: pageSize,
    query: query,
    user_id: userId,
  };
  const response = await axios.post(`${API_URL}/search/`, data);
  return response;
};
