import axios from "axios";
axios.defaults.withCredentials = true;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addContent = async (
  userId: string,
  spaceId: string | undefined,
  contentURLs: string[],
) => {
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

  const reader = response.body!.getReader();
  return (async function* () {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      let str = new TextDecoder("utf-8").decode(value);
      yield JSON.parse(str);
    }
  })();
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
    //console.log(err);
  }
};
