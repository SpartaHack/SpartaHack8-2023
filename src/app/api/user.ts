import axios from "axios";
axios.defaults.withCredentials = true;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

console.log(API_URL);

export const userSignIn = async (userId: string) => {
  const jwtToken = localStorage.getItem("jwtToken");
  const headers = jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {};

  const data = {
    user_id: userId,
  };

  try {
    const response = await axios.post(`${API_URL}/user/signin`, data, {
      headers,
    });
    return response;
  } catch (err) {
    //console.log(err);
  }
};

export const userSignUp = async (
  userId: string,
  email: string,
  fullName: string,
  photoURL: string,
  educationLevel: string,
  username: string
) => {
  const jwtToken = localStorage.getItem("jwtToken");
  const headers = jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {};

  const data = {
    user_id: userId,
    email: email,
    full_name: fullName,
    photo_url: photoURL,
    education_level: educationLevel,
    username: username,
  };

  try {
    const response = await axios.post(`${API_URL}/user/signup`, data, {
      headers,
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const userLogOut = async (userId: string) => {
  const data = {
    user_id: userId,
  };
  try {
    const response = await axios.post(`${API_URL}/user/logout`, data);
    return response;
  } catch (err) {
    //console.log(err);
  }
};

export const getUserSpaces = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/spaces`);
    return response;
  } catch (err) {
    //console.log(err);
  }
};

export const getUser = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/profile`);
    return response;
  } catch (err) {
    //console.log(err);
  }
};

export const getContentHistory = async (userId: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/user/${userId}/content/history`,
    );
    return response;
  } catch (err) {
    //console.log(err);
  }
};

export const updateUser = async (
  userId: string,
  educationLevel: string,
  photoURL: string,
) => {
  const data = {
    education_level: educationLevel,
    photo_url: photoURL,
  };

  try {
    const response = await axios.put(`${API_URL}/user/${userId}`, data);
    return response;
  } catch (err) {
    //console.log(err);
  }
};
