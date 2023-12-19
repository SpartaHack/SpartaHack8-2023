import axios from "axios";
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
  try {
    const response = await axios.post(`${API_URL}/search/`, data);
    return response;
  } catch (err) {
    console.log(err);
  }
};
