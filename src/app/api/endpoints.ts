import axios from "axios";
import { toast } from "sonner";
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

// SPACE
export const getSpaceContents = async (
  userId: string, 
  spaceId: string
) => {
  try {
    const response = await axios.get(`${API_URL}/spaces/${userId}/${spaceId}`);
    return response;
  } catch (err) {
    console.error(err);
    toast.error('Internal Server Error')
  }
}

export const addSpace = async (
  userId: string, 
  spaceId: string
) => {
  const data = {
    user_id: userId,
    space_id: spaceId
  };

  try {
    const response = await axios.post(`${API_URL}/spaces/add`, data);
    return response;
  } catch (err) {
    console.error(err);
    toast.error('Internal Server Error')
  }
}

export const updateSpace = async (
  userId: string, 
  spaceId: string, 
  spaceName?: string
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    space_name: spaceName
  };

  try {
    const response = await axios.put(`${API_URL}/spaces/update`, data);
    return response;
  } catch (err) {
    console.error(err);
    toast.error('Internal Server Error')
  }
}

export const deleteSpace = async (
  userId: string, 
  spaceId: string
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
  };

  try {
    const response = await axios.delete(`${API_URL}/spaces/delete`, { data });
    return response;
  } catch (err) {
    console.error(err);
    toast.error('Internal Server Error')
  }
}

export const getSpaceData = async (spaceId: string) => {
  try {
    const response = await axios.get(`${API_URL}/spaces/${spaceId}`);
    return response;
  } catch (err) {
    console.error(err);
    toast.error('Internal Server Error')
  }
}

export const chatSpace = async (
  userId: string, 
  spaceId: string, 
  contentId: string,
  query: string, 
  information?: any, 
  getExistingChatHistory?: boolean, 
  saveChatHistory?: boolean
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    content_id: contentId,
    query: query,
    information: information,
    get_existing_chat_history: getExistingChatHistory,
    save_chat_history: saveChatHistory
  };

  const response = await fetch(`${API_URL}/generation/chat/space`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response;
};

// CONTENT
export const getContentInfo = async (
  contentURL: string
) => {
  try {
    const response = await axios.get(`${API_URL}/content/info/${contentURL}`);
    return response;
  } catch (err) {
    console.error(err);
    toast.error('Internal Server Error')
  }
}

export const addContent = async (
  userId: string, 
  spaceId: string, 
  contentURL?: string
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    content_url: contentURL
  }
  try {
    const response = await axios.post(`${API_URL}/content/add/`, data);
    return response;
  } catch (err) {
    console.error(err);
    toast.error('Internal Server Error')
  }
}

export const deleteContent = async (
  userId: string, 
  spaceId: string, 
  contentId: string,
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    content_id: contentId
  }
  try {
    const response = await axios.post(`${API_URL}/content/delete/${userId}/${spaceId}/${contentId}`, data);
    return response;
  } catch (err) {
    console.error(err);
    toast.error('Internal Server Error')
  }
}

export const getContentSummary = async (
  contentURL: string
) => {
  try {
    const response = await axios.get(`${API_URL}/content/summary/${contentURL}`);
    return response;
  } catch (err) {
    console.error(err);
    toast.error('Internal Server Error')
  }
}

export const getContentQuestions = async (
  contentURL: string
) => {
  try {
    const response = await axios.get(`${API_URL}/content/questions/${contentURL}`);
    return response;
  } catch (err) {
    console.error(err);
    toast.error('Internal Server Error')
  }
}

export const chatContent = async (
  userId: string, 
  spaceId: string, 
  contentId: string,
  query: string, 
  information?: any, 
  getExistingChatHistory?: boolean, 
  saveChatHistory?: boolean
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    content_id: contentId,
    query: query,
    information: information,
    get_existing_chat_history: getExistingChatHistory,
    save_chat_history: saveChatHistory
  };

  const response = await fetch(`${API_URL}/generation/chat/content`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response;
};