import { generateChapters } from "@/app/api/generation";
import { useEffect, useState } from "react";
import useStore from "./use-store";
import { useLearnStore } from "@/context/learn-context";
import { auth } from "../../db/firebase";
import useAuth from "./use-auth";
import { Chapter } from "../../types";
import { formatTime } from "@/functions/date-time-formatter";

const useChapters = (handleSourcing: (source: string) => void) => {
  const learnContent = useStore(useLearnStore, (state) => state.learnContent);
  const [chapters, setChapter] = useState<Chapter[]>([]);
  const userId = useAuth();

  useEffect(() => {
    const fetchChapters = async () => {
      if (learnContent) {
        const responseStream = await generateChapters(
          auth.currentUser?.uid! || userId!,
          learnContent?.content_id!,
        );
        const chaptersArray: Chapter[] = [];
        for await (const content of responseStream) {
          for await (const data of content) {
            chaptersArray.push({
              title: (
                <div className="flex flex-col">
                  <span
                    className="text-sm font-extrabold hover:underline"
                    onClick={() => handleSourcing(data.source)}
                  >
                    {formatTime(data.source)}
                  </span>
                  <h3>{data && data?.response?.heading}</h3>
                </div>
              ),
              content: (
                <p className="text-sm">{data && data?.response?.summary}</p>
              ),
            });
          }
          setChapter(chaptersArray);
        }
      }
    };
    fetchChapters();
  }, [learnContent]);

  return { chapters };
};

export default useChapters;
