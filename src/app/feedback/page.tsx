import Form from "@/components/user-forms/form";
import SecondaryHeader from "@/ui/header/secondary-header";
import React from "react";

const FeedbackPage = () => {

    return (    
        <div className="flex bg-white dark:bg-neutral-900 flex-col h-screen items-center justify-center">
        <SecondaryHeader/>
        <div className="w-full sm:w-4/5 flex-col p-8 space-y-4 max-w-lg items-center justify-center">
        <h1 className="text-4xl font-bold mb-6 text-center">Share your feedback</h1>
            <Form/>
        </div>
        <h1 className="text-center">
                We greatly appreciate your feedback!
            </h1>
        </div>
      );
};

export default FeedbackPage;
