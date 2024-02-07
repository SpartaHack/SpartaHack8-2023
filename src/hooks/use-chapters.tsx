import { generateChapters } from "@/app/api/generation";
import { useEffect, useState } from "react";
import useStore from "./use-store";
import { useLearnStore } from "@/context/learn-context";
import { auth } from "../../db/firebase";
import useAuth from "./use-auth";
import { Chapter } from "../../types";
import { formatTime } from "@/functions/date-time-formatter";

const useChapters = (
  handleSourcing: (source: string) => void,
  contentId: string,
) => {
  const learnContent = useStore(useLearnStore, (state) => state.learnContent);
  const { updateLearnContent } = useLearnStore();
  const [chapters, setChapter] = useState<Chapter[]>([]);
  const userId = useAuth();

  useEffect(() => {
    const fetchChapters = async () => {
      if (learnContent && learnContent.content_url != contentId) {
        setChapter([]);
        const responseStream = await generateChapters(
          auth.currentUser?.uid! || userId! || "anonymous",
          contentId,
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
                    {learnContent.type === "youtube"
                      ? formatTime(data.source)
                      : data.source}
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
          updateLearnContent({
            generations: {
              chapters: chaptersArray,
            },
          });
        }
      } else {
        setChapter(learnContent?.generations.chapters!);
      }
    };
    fetchChapters();
  }, [contentId, userId]);

  return { chapters };
};

export default useChapters;
