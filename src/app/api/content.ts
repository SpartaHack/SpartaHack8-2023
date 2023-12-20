import axios from "axios";
axios.defaults.withCredentials = true;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addContent = async (
  userId: string,
  spaceId: string | undefined,
  contentURL: string,
) => {
  const data = {
    user_id: userId,
    space_id: spaceId,
    content: contentURL,
  };

  try {
    const response = await fetch(`${API_URL}/content/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (!response.body) {
      throw new Error("No response body");
    }

    const reader = response.body.getReader();
    return (async function* () {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        let str = new TextDecoder("utf-8").decode(value);
        yield JSON.parse(str);
      }
    })();
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
