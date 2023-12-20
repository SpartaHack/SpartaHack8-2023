import { useErrorStore } from "@/context/error-context";
import { useEffect, useState } from "react";
import PopUp from "./custom-pop-up";
import { useRouter } from "next/navigation";

const ErrorModal = () => {
  const error = useErrorStore((state) => state.error);
  const router = useRouter();
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    setShowPopUp(true);
  }, [error]);

  const buttonClick = () => {
    setShowPopUp(false);
    router.push("/signin");
  };

  return (
    <>
      {error && (
        <PopUp
          title={error?.response?.status!}
          description={error?.response?.statusText!}
          isOpen={showPopUp}
          closeModal={() => setShowPopUp(false)}
          buttonTitle="Sign In"
          buttonClick={buttonClick}
        />
      )}
    </>
  );
};

export default ErrorModal;
