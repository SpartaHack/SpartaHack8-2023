import axios from "axios";
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Chat with content
export const chatAboutContent = async (
    user_id: string,
    course_id: string,
    query: string,
    information: any,
    content_id: string,
    get_existing_chat_history?: boolean,
    save_chat_history?: boolean
  ): Promise<any> => {
    try {
        const response = await axios.post(`${API_URL}/generation/chat/content`, {
          user_id,
          course_id,
          query,
          information,
          content_id,
          get_existing_chat_history,
          save_chat_history
        });
        return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };