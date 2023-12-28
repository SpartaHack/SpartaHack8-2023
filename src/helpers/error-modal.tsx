import { useErrorStore } from "@/context/error-context";
import { useEffect, useState } from "react";
import PopUp from "./custom-pop-up";

const ErrorModal = () => {
  const error = useErrorStore((state) => state.error);
  const setError = useErrorStore((state) => state.setError);
  const [showPopUp, setShowPopUp] = useState(false);

  let response = "";

  if (error?.response?.statusText) {
    response = error.response.statusText;
  } else if (error?.request?.response) {
    const parsedResponse = JSON.parse(error.request.response);

    if (parsedResponse.detail) {
      response = parsedResponse.detail;
    } else if (parsedResponse.message) {
      response = parsedResponse.message;
    }
  }

  const closeClick = () => {
    setShowPopUp(false);
    setError(undefined);
  };

  useEffect(() => {
    setShowPopUp(true);
  }, [error]);

  return (
    <>
      {error && (
        <PopUp
          title={error?.response?.status!}
          description={response}
          isOpen={showPopUp}
          closeModal={closeClick}
        />
      )}
    </>
  );
};

export default ErrorModal;
