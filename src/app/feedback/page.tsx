import Feedback from "@/components/user-forms/feedback";
import SecondaryHeader from "@/ui/header/secondary-header";
import React from "react";

const FeedbackPage = () => {

    return (    
        <div className="flex bg-white dark:bg-neutral-900 flex-col h-screen items-center justify-center">
        <SecondaryHeader/>
            <Feedback/>
        </div>
      );
};

export default FeedbackPage;
