import axios from "axios";
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

// USER
export const userLogIn = async (
  userId: string
) => {
  const data = {
    user_id: userId,
  };

  try {
    const response = await axios.post(`${API_URL}/user/login`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const userSignUp = async (
  userId: string,
  email: string,
  fullName: string,
  photoURL: string,
  educationLevel: string
) => {
  const data = {
    user_id: userId,
    email: email,
    full_name: fullName,
    photo_url: photoURL,
    education_level: educationLevel
  }

  try {
    const response = await axios.post(`${API_URL}/user/signup`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const getUserSpaces = async (
  userId: string
) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/spaces`);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const getUser = async (
  userId: string
) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/profile`);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const getHistory = async (
  userId: string
) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/history`);
    return response;
  } catch (err) {
    console.error(err);
  }
}

// CHAT
export const chat = async (
  userId : string,
  spaceId : string[],
  contentId : string[],
  query : string,
  chatType : 'content' | 'space',
  getExistingChatHistory : boolean,
  saveChatHistory : boolean
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    content_id: contentId,
    query: query,
    chatbot_type: chatType,
    get_existing_chat_history: getExistingChatHistory,
    save_chat_history: saveChatHistory
  };

  const response = await fetch(`${API_URL}/generation/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response;
};