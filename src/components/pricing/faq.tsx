import CustomAccordion from "@/helpers/custom-accordion";
import { Link } from "@nextui-org/react";
import React from "react";

export const faqData = [
  {
    title: "What YouLearn plan is right for me?",
    content: (
      <h1>
        Choose the free plan if you&apos;re an occasional learner, offering up to 100 messages / day with the AI co-pilot, and one
        dedicated space with a maximum of 10 contents at no cost. <br />
        Opt for the Pro Plan at $8 / month for
        unlimited access to contents, PDF file uploads of up to 20 MB, AI co-pilot responses, spaces, ideal for daily learners.
      </h1>
    ),
    subtitle: <h3>Plans</h3>,
  },
  {
    title: "What payment methods do you offer?",
    content: (
      <h1>We support payment through credit card, Google Pay, and Link.</h1>
    ),
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
        organized learning resources. Additionally, you can upload your own PDFs
        of up to 20 MB in size.
      </h1>
    ),
    subtitle: <h3>Features</h3>,
  },
  {
    title: "Do you offer student discount?",
    content: 
      <h1>
        Yes! If you opt for the:
        <ul>
          <li>- <span className="font-bold">Monthly Plan</span>: 20% discount for the first 12 months</li>
          <li>- <span className="font-bold">Yearly Plan</span>: 20% discount for the first year</li>
        </ul>
        Sign up with a .edu email and the discount will automatically be applied. If your student
        email does not end with a .edu please contact us and we will arrange it
        for you.
      </h1>
    ,
    subtitle: <h3>Student Discount</h3>,
  },
  {
    title: "What is your refund policy?",
    content: (
      <h1>
        If you&apos;re not satisfied with your YouLearn subscription, you can
        request a refund within the first 30 days of your purchase. Please
        contact our customer support to initiate the refund process, and
        we&apos;ll guide you through the steps to ensure a hassle-free
        experience.
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
          Contact Us
        </Link>
      </h1>
      <div className="px-12 lg:px-[190px]">
        <CustomAccordion accordionData={faqData} />
      </div>
    </div>
  );
};

export default FAQ;
