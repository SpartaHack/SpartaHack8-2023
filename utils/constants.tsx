import Chat from "@/components/learn/tabs/chat";
import Summary from "@/components/learn/tabs/summary";
import Quiz from "@/components/learn/tabs/quiz";

export const TabOptions = [
    {
      label: "Chat",
      content: <Chat/>
    },
    {
      label: "Summary",
      content: <Summary/>
    },
    {
      label: "Quiz",
      content: <Quiz />
    }
];