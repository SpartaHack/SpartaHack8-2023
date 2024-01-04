import { useErrorStore } from "@/context/error-context";
import { useEffect, useState } from "react";
import PopUp from "./custom-pop-up";
import { toast } from "sonner";

const ErrorMessage = () => {
  const error = useErrorStore((state) => state.error);
  const showToast = useErrorStore((state) => state.showToast);
  const setError = useErrorStore((state) => state.setError);
  const setToast = useErrorStore((state) => state.setToast);
  const [showPopUp, setShowPopUp] = useState(false);

  let response = "";

  if (error?.request?.response) {
    const parsedResponse = JSON.parse(error.request.response);

    if (parsedResponse.message) {
      response = parsedResponse.message;
    } else if (parsedResponse.detail) {
      response = parsedResponse.detail;
    }
  } else if (error?.response?.statusText) {
    response = error.response.statusText;
  }

  const closeClick = () => {
    setShowPopUp(false);
    setError(undefined);
  };

  useEffect(() => {
    setShowPopUp(true);
  }, [error]);

  if (showToast) {
    toast.error(
      response ? response : "Internal Server Error. Please try again later.",
    );
    setToast!(false);
    setError(undefined);
  }

  return (
    <>
      {error && !showToast && (
        <PopUp
          title={error?.response?.status ? error?.response?.status : 500}
          description={
            response
              ? response
              : "Internal Server Error. Please try again later."
          }
          isOpen={showPopUp}
          closeModal={closeClick}
        />
      )}
    </>
  );
};

export default ErrorMessage;
