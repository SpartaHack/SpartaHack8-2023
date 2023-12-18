import CustomAccordion from "@/helpers/custom-accordion";
import { Link } from "@nextui-org/react";
import React from "react";

export const faqData = [
  {
    title: "What YouLearn plan is right for me?",
    content: (
      <h1>
        Choose the free plan if you&apos;re an occasional learner, offering 10
        videos &amp; PDFs, and limited AI responses at no cost. Opt for the Pro
        Plan at $10/month for unlimited access to content and AI responses,
        ideal for daily learners. For personalized guidance, contact us and
        we&apos;ll assist you in finding the perfect fit for your learning
        needs.
      </h1>
    ),
    subtitle: <h3>Plan</h3>,
  },
  {
    title: "What payment methods do you offer?",
    content: <h1>We support payment through credit card.</h1>,
    subtitle: <h3>Payments</h3>,
  },
  {
    title: "Can I cancel my YouLearn plan at any time?",
    content: (
      <h1>
        Yes, you can cancel your YouLearn plan at any time and there are no
        cancellation fees. If you decide to cancel, you&apos;ll still have
        access to your plan&apos;s features until the end of your current
        billing cycle.
      </h1>
    ),
    subtitle: <h3>Cancellation</h3>,
  },
  {
    title: "What features does the pro plan offer?",
    content: (
      <h1>
        The Pro plan on YouLearn offers unlimited access to videos, PDFs, and AI
        responses, along with the ability to create multiple personal spaces for
        organized learning. Additionally, it includes an AI-space chatbot to ask about
        anything and everything in each space.
      </h1>
    ),
    subtitle: <h3>Features</h3>,
  },
  {
    title: "What is your refund policy?",
    content: (
      <h1>
        If you&apos;re not satisfied with your YouLearn subscription, you can
        request a refund within the first 30 days of your purchase. Please
        contact our customer support to initiate the refund process, and
        we&apos;ll guide you through the steps to ensure a smooth and
        hassle-free experience.
      </h1>
    ),
    subtitle: <h3>Refund</h3>,
  },
];

const FAQ = () => {
  return (
    <div className="flex flex-col py-12">
      <h1 className="text-3xl font-bold font-sans text-center lg:block hidden">
        Frequently Asked Questions
      </h1>
      <h1 className="text-3xl font-bold font-sans text-center lg:hidden block">
        FAQs
      </h1>
      <h1 className="mt-6 lg:mb-12 mb-10 text-center">
        Can&apos;t find the answer here? &nbsp;
        <Link href="/contact" underline="always" color="foreground">
          Contact Support
        </Link>
      </h1>
      <div className="px-12 lg:px-[190px]">
        <CustomAccordion accordionData={faqData} />
      </div>
    </div>
  );
};

export default FAQ;
