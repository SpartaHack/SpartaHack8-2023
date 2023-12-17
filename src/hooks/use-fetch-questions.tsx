import { generateSpaceQuestions } from "@/app/api/endpoints";
import { useEffect, useState } from "react";
import { MessageType } from "../../types";

const useFetchQuestions = (chatLog: MessageType[], userId: string, spaceId: string) => {
  const [questions, setQuestions] = useState<string[]>([
    "What topics will be covered in this space?",
    "What are the learning objectives of this space?",
  ]);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (chatLog.length !== 0 && userId && spaceId) {
        const response = await generateSpaceQuestions(userId, spaceId);
        setQuestions(response?.data);
      }
    };

    fetchQuestions();
  }, [userId, spaceId]);

  return questions;
};

export default useFetchQuestions;