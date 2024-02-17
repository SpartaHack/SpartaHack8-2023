import axios from "axios";
axios.defaults.withCredentials = true;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const chat = async (
  userId: string,
  spaceId: string,
  contentId: string,
  query: string,
  getExistingChatHistory: boolean,
  saveChatHistory: boolean,
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    content_id: contentId,
    query: query,
    get_existing_chat_history: getExistingChatHistory,
    save_chat_history: saveChatHistory,
  };
  const response = await fetch(`${API_URL}/generation/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });
  return response;
};

export const generateContentSummary = async (
  userId: string,
  contentId: string,
) => {
  const data = {
    user_id: userId,
    content_id: contentId,
  };

  const response = await axios.post(
    `${API_URL}/generation/content/summary`,
    data,
  );
  return response;
};

export const generateContentQuestions = async (
  userId: string,
  contentId: string,
) => {
  const data = {
    user_id: userId,
    content_id: contentId,
  };

  const response = await axios.post(
    `${API_URL}/generation/content/chat_prompts`,
    data,
  );
  return response;
};

export const chatHistory = async (
  userId: string,
  chatbotType: string,
  contentId: string,
  spaceId: string,
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
    //console.log(err);
  }
};

export const getContent = async (
  userId: string,
  contentId: string,
  contentURL: string,
  spaceId?: string,
) => {
  let data: {
    user_id: string;
    content_id: string;
    space_id?: string;
    content_url: string;
  };

  if (spaceId) {
    data = {
      user_id: userId,
      content_id: contentId,
      space_id: spaceId,
      content_url: contentURL,
    };
  } else {
    data = {
      user_id: userId,
      content_id: contentId,
      content_url: contentURL,
    };
  }

  const response = await axios.post(`${API_URL}/content/get`, data);
  return response;
};

export const getContentSeo = async (
  contentId: string,
) => {
  const data = {
    content_id: contentId
  };
  const response = await axios.post(`${API_URL}/content/seo`, data);
  return response;
};

export const getSpaceSeo = async (
  spaceId: string,
) => {
  const data = {
    space_id: spaceId
  };
  const response = await axios.post(`${API_URL}/space/seo`, data);
  return response;
};

export const generateChapters = async (userId: string, contentId: string) => {
  const data = {
    user_id: userId,
    content_id: contentId,
  };

  const response = await fetch(`${API_URL}/generation/content/chapters`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (!response.body) throw new Error("No response body");

  const reader = response.body.getReader();
  return (async function* () {
    let partialData = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      partialData += new TextDecoder("utf-8").decode(value, { stream: true });
      try {
        yield JSON.parse(partialData);
        partialData = "";
      } catch (error) {
        // console.error("Error parsing JSON:", error);
      }
    }
  })();
};
