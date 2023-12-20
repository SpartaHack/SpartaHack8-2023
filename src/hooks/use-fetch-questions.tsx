import { generateSpaceQuestions } from "@/app/api/generation";
import { useEffect, useState } from "react";
import { MessageType } from "../../types";

const useFetchQuestions = (
  chatLog: MessageType[],
  userId: string,
  spaceId: string,
) => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<string[]>([
    "What topics will be covered in this space?",
    "What are the learning objectives of this space?",
  ]);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (chatLog.length !== 0 && userId && spaceId) {
        setLoading(true);
        const response = await generateSpaceQuestions(userId, spaceId);
        if (response) {
          setQuestions(response?.data);
        } else {
          setQuestions([
            "What topics will be covered in this space?",
            "What are the learning objectives of this space?",
          ]);
        }
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [userId, spaceId]);

  return { loading, questions };
};

export default useFetchQuestions;
