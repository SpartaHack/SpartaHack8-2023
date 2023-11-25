import React from "react";

const TypingIndicator = () => (
  <div className="flex space-x-1 pt-4 pb-8">
    <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
    <div className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-75"></div>
    <div className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-150"></div>
  </div>
);

export default TypingIndicator;
