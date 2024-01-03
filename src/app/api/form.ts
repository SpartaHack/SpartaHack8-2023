import axios from "axios";
axios.defaults.withCredentials = true;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const formSubmit = async (
  name: string,
  email: string,
  message: string,
  feedback_type: string,
) => {
  const data = {
    name: name,
    email: email,
    form_type: "feedback",
    message: message,
    metadata: { feedback_type: feedback_type },
  };

  try {
    const response = await axios.post(`${API_URL}/form/submit`, data);
    return response;
  } catch (err) {
    // console.log(err);
  }
};
