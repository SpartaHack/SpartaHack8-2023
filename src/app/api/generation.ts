import axios from "axios";
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const chat = async (
  userId: string,
  spaceId: string[],
  contentId: string[],
  query: string,
  chatType: "content" | "space",
  getExistingChatHistory: boolean,
  saveChatHistory: boolean,
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    content_id: contentId,
    query: query,
    chatbot_type: chatType,
    get_existing_chat_history: getExistingChatHistory,
    save_chat_history: saveChatHistory,
  };
  try {
    const response = await fetch(`${API_URL}/generation/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const generateContentSummary = async (
  userId: string,
  contentId: string,
) => {
  const data = {
    user_id: userId,
    content_id: contentId,
  };

  try {
    const response = await axios.post(
      `${API_URL}/generation/content/summary`,
      data,
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const generateContentQuestions = async (
  userId: string,
  contentId: string,
) => {
  const data = {
    user_id: userId,
    content_id: contentId,
  };

  try {
    const response = await axios.post(
      `${API_URL}/generation/content/chat_prompts`,
      data,
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const generateSpaceQuestions = async (
  userId: string,
  spaceId: string,
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
  };

  try {
    const response = await axios.post(
      `${API_URL}/generation/space/chat_prompts`,
      data,
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const chatHistory = async (
  userId: string,
  chatbotType: string,
  contentId: string[],
  spaceId: string[],
) => {
  const data = {
    user_id: userId,
    chatbot_type: chatbotType,
    content_id: contentId,
    space_id: spaceId,
  };

  try {
    const response = await axios.post(
      `${API_URL}/generation/chat/history`,
      data,
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getContent = async (
  userId: string,
  contentId: string,
  spaceId?: string,
) => {
  let data: { user_id: string; content_id: string; space_id?: string };

  if (spaceId) {
    data = {
      user_id: userId,
      content_id: contentId,
      space_id: spaceId,
    };
  } else {
    data = {
      user_id: userId,
      content_id: contentId,
    };
  }

  try {
    const response = await axios.post(`${API_URL}/content/get`, data);
    return response;
  } catch (err) {
    console.log(err);
  }
};
