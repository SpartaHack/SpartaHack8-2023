import axios from "axios";
axios.defaults.withCredentials = true;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addContent = async (
  userId: string,
  spaceId: string | undefined,
  contentURLs: string[],
) => {
  try {
    const data = {
      user_id: userId,
      space_id: spaceId,
      content_urls: contentURLs,
    };

    const response = await fetch(`${API_URL}/content/add`, {
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
          console.error("Error parsing JSON:", error);
        }
      }
    })();
  } catch (error) {
    console.error("Error fetching or streaming data:", error);
    throw error;
  }
};

export const deleteContent = async (
  userId: string,
  spaceId: string,
  contentIds: string[],
  deleteFromHistory: boolean,
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    content_ids: contentIds,
    delete_from_history: deleteFromHistory,
  };

  try {
    const response = await axios.post(`${API_URL}/content/delete`, data);
    return response;
  } catch (err) {
    // console.log(err);
  }
};

export const uploadContent = async (file: Blob, userId: string) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("user_id", userId);

  const response = await axios({
    method: "post",
    url: `${API_URL}/content/upload`,
    data: formData,
    withCredentials: true,
  });

  return response;
};
