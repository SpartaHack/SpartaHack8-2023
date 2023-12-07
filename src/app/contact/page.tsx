import SecondaryHeader from "@/ui/header/secondary-header";
import Form from "@/components/user-forms/form";

const ContactPage = () => {
  return (
    <div className="flex bg-white dark:bg-neutral-900 flex-col h-screen items-center justify-center">
      <SecondaryHeader />
      <div className="w-full sm:w-4/5 flex-col p-8 space-y-4 max-w-lg items-center justify-center">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <Form />
        <h1 className="text-center">We will reply back as soon as we can!</h1>
      </div>
    </div>
  );
};

export default ContactPage;
