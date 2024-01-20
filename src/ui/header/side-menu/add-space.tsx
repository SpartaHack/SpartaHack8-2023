import { addSpace, getSpace } from "@/app/api/space";
import { useErrorStore } from "@/context/error-context";
import { useSpaceStore } from "@/context/space-context";
import { useUserStore } from "@/context/user-context";
import useStore from "@/hooks/use-store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const AddSpace = () => {
  const router = useRouter();
  const userId = useStore(useUserStore, (state) => state.userId);
  const { addSpaceToState } = useSpaceStore();
  const setError = useErrorStore((state) => state.setError);
  const setToast = useErrorStore((state) => state.setToast);

  const handleSpaceCreation = async () => {
    const addingSpace = toast.loading("Adding");
    try {
      const response = await addSpace(userId!, "Untitled Space", "private");
      if (response?.data) {
        addSpaceToState(response.data);
        router.push(`/space/${response.data._id}`);
      }
      toast.dismiss(addingSpace);
      toast.success("Space added");
    } catch (err) {
      toast.dismiss(addingSpace);
      if (isAxiosError(err)) {
        setToast!(true);
        setError(err);
      }
    }
  };

  return (
    <div className="w-full">
      <div
        className="flex flex-row w-full cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-xl"
        onClick={() => handleSpaceCreation()}
      >
        <Icon
          icon="mdi:folder-add-outline"
          className="h-6 dark:text-neutral-500 text-neutral-400 w-6"
        />
        <span className="text-neutral-400 ml-5 dark:text-neutral-500">
          Add Space
        </span>
      </div>
    </div>
  );
};

export default AddSpace;
