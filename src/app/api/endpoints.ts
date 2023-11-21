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

// SPACES
export const getSpace = async (
  userId: string,
  spaceId: string
) => {
  try {
    const response = await axios.get(`${API_URL}/spaces/${userId}/${spaceId}`);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const addSpace = async (
  userId: string,
  spaceId: string,
  spaceName: string,
  visibility: 'private' | 'public'
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    space_name: spaceName,
    visibility: visibility
  };

  try {
    const response = await axios.post(`${API_URL}/spaces/add`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const updateSpace = async (
  userId: string,
  spaceId: string,
  spaceName: string,
  visibility: 'private' | 'public'
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    space_name: spaceName,
    visibility: visibility
  };

  try {
    const response = await axios.put(`${API_URL}/spaces/add`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const deleteSpace = async (
  userId: string,
  spaceId: string,
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
  };

  try {
    const response = await axios.post(`${API_URL}/spaces/delete`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
}

// CONTENT
export const addContent = async (
  userId: string,
  spaceId: string,
  contentURL: string
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    content_url: contentURL
  };

  try {
    const response = await axios.post(`${API_URL}/content/add`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const deleteContent = async (
  userId: string,
  spaceId: string,
  contentIds: string[]
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    content_ids: contentIds
  };

  try {
    const response = await axios.post(`${API_URL}/content/delete`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
}

// GENERATION
export const chat = async (
  userId: string,
  spaceId: string[],
  contentId: string[],
  query: string,
  chatType: 'content' | 'space',
  getExistingChatHistory: boolean,
  saveChatHistory: boolean
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

export const generateContentSummary = async (
  userId: string,
  contentId: string
) => {
  const data = {
    user_id: userId,
    content_id: contentId
  }

  try {
    const response = await axios.post(`${API_URL}/generation/content/summary`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const generateContentQuestions = async (
  userId: string,
  contentId: string
) => {
  const data = {
    user_id: userId,
    content_id: contentId
  }

  try {
    const response = await axios.post(`${API_URL}/generation/content/questions`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
}