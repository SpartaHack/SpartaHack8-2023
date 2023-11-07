import axios from "axios";
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

// COURSE
export const getCourseContents = async (
  userId: string, 
  courseId: string
) => {
  try {
    const response = await axios.get(`${API_URL}/courses/${userId}/${courseId}`);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const addCourse = async (
  userId: string, 
  courseId: string
) => {
  const data = {
    user_id: userId,
    course_id: courseId
  };

  try {
    const response = await axios.post(`${API_URL}/courses/add`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const updateCourse = async (
  userId: string, 
  courseId: string, 
  courseName?: string
) => {
  const data = {
    user_id: userId,
    course_id: courseId,
    course_name: courseName
  };

  try {
    const response = await axios.put(`${API_URL}/courses/update`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const deleteCourse = async (
  userId: string, 
  courseId: string
) => {
  const data = {
    user_id: userId,
    course_id: courseId,
  };

  try {
    const response = await axios.delete(`${API_URL}/courses/delete`, { data });
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const getCourseData = async (courseId: string) => {
  try {
    const response = await axios.get(`${API_URL}/courses/${courseId}`);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const chatCourse = async (
  userId: string, 
  courseId: string, 
  query: string, 
  information?: any, 
  getExistingChatHistory?: boolean, 
  saveChatHistory?: boolean
) => {
  const data = {
    user_id: userId,
    course_id: courseId,
    query: query,
    information: information,
    get_existing_chat_history: getExistingChatHistory,
    save_chat_history: saveChatHistory
  };

  try {
    const response = await axios.post(`${API_URL}/generation/chat/course`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
}

// CONTENT
export const getContentInfo = async (
  contentURL: string
) => {
  try {
    const response = await axios.get(`${API_URL}/content/info/${contentURL}`);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const addContent = async (
  userId: string, 
  courseId: string, 
  contentURL?: string
) => {
  const data = {
    user_id: userId,
    course_id: courseId,
    content_url: contentURL
  }
  try {
    const response = await axios.post(`${API_URL}/content/add/`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export const deleteContent = async (
  userId: string, 
  courseId: string, 
  contentId: string,
) => {
  const data = {
    user_id: userId,
    course_id: courseId,
    content_id: contentId
  }
  try {
    const response = await axios.post(`${API_URL}/content/delete/${userId}/${courseId}/${contentId}`, data);
    return response;
  } catch (err) {
    console.error(err);
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
  }
}

export const chatContent = async (
  userId: string, 
  courseId: string, 
  query: string, 
  information?: any, 
  getExistingChatHistory?: boolean, 
  saveChatHistory?: boolean
) => {
  const data = {
    user_id: userId,
    course_id: courseId,
    query: query,
    information: information,
    get_existing_chat_history: getExistingChatHistory,
    save_chat_history: saveChatHistory
  };

  try {
    const response = await axios.post(`${API_URL}/generation/chat/content`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
}
