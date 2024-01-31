import axios from "axios";
axios.defaults.withCredentials = true;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getSpace = async (userId: string, spaceId: string) => {
  const response = await axios.get(`${API_URL}/spaces/${userId}/${spaceId}`);
  return response;
};

export const addSpace = async (
  userId: string,
  spaceName: string,
  visibility: "private" | "public",
) => {
  const data = {
    user_id: userId,
    space_name: spaceName,
    visibility: visibility,
  };
  const response = await axios.post(`${API_URL}/spaces/add`, data);
  return response;
};

export const updateSpace = async (
  userId: string,
  spaceId: string,
  spaceName: string,
  description: string,
  visibility: "private" | "public",
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    space_name: spaceName,
    description: description,
    visibility: visibility,
  };

  try {
    const response = await axios.put(`${API_URL}/spaces/update`, data);
    return response;
  } catch (err) {
    //console.log(err);
  }
};

export const deleteSpace = async (userId: string, spaceId: string) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
  };

  try {
    const response = await axios.post(`${API_URL}/spaces/delete`, data);
    return response;
  } catch (err) {
    //console.log(err);
  }
};

export const cloneSpace = async (userId: string, spaceId: string) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
  };
  const response = await axios.post(`${API_URL}/spaces/clone`, data);
  return response;
};
