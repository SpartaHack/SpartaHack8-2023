import axios from "axios";
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

// USER
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
    console.log(err);
  }
};

export const userSignUp = async (
  userId: string,
  email: string,
  fullName: string,
  photoURL: string,
  educationLevel: string,
) => {
  const jwtToken = localStorage.getItem("jwtToken");
  const headers = jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {};

  const data = {
    user_id: userId,
    email: email,
    full_name: fullName,
    photo_url: photoURL,
    education_level: educationLevel,
  };

  try {
    const response = await axios.post(`${API_URL}/user/signup`, data, {
      headers,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getUserSpaces = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/spaces`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/profile`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getHistory = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/history`);
    return response;
  } catch (err) {
    console.log(err);
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
    console.log(err);
  }
};

// SPACES
export const getSpace = async (userId: string, spaceId: string) => {
  try {
    const response = await axios.get(`${API_URL}/spaces/${userId}/${spaceId}`);
    return response;
  } catch (err) {
    console.log(err);
  }
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

  try {
    const response = await axios.post(`${API_URL}/spaces/add`, data);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const updateSpace = async (
  userId: string,
  spaceId: string,
  spaceName: string,
  visibility: "private" | "public",
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    space_name: spaceName,
    visibility: visibility,
  };

  try {
    const response = await axios.put(`${API_URL}/spaces/update`, data);
    return response;
  } catch (err) {
    console.log(err);
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
    console.log(err);
  }
};

// CONTENT
export const addContent = async (
  userId: string,
  spaceId: string,
  contentURL: string,
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    content_url: contentURL,
  };

  try {
    const response = await axios.post(`${API_URL}/content/add`, data);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const deleteContent = async (
  userId: string,
  spaceId: string,
  contentIds: string[],
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    content_ids: contentIds,
  };

  try {
    const response = await axios.post(`${API_URL}/content/delete`, data);
    return response;
  } catch (err) {
    console.log(err);
  }
};

// GENERATION
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

  const response = await fetch(`${API_URL}/generation/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
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
      `${API_URL}/generation/content/questions`,
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
  let data: { user_id: string; content_id: string; space_id?: string; };

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
    const response = await axios.post(
      `${API_URL}/content/get`,
      data,
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

//PAYMENT
export const checkoutSession = async (
  userId: string,
  frequency: string
) => {
  const data = {
    user_id: userId,
    frequency: frequency
  };

  try {
    const response = await axios.post(
      `${API_URL}/payment/checkout`,
      data,
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}

export const getPortalLink = async (
  userId: string,
) => {

  try {
    const response = await axios.get(
      `${API_URL}/payment/portal/${userId}`,
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}