import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useErrorStore } from "@/context/error-context";
import { useSpaceStore } from "@/context/space-context";
import { cloneSpace } from "@/app/api/space";
import useAuth from "@/hooks/use-auth";
import { isAxiosError } from "axios";
import useStore from "@/hooks/use-store";
import { useContentStore } from "@/context/content-store";

// million-ignore
const CloneSpace = () => {
  const router = useRouter();
  const userId = useAuth();
  const { addSpaceToState } = useSpaceStore();
  const contents = useStore(useContentStore, (state) => state.contents);

  const handleClone = async () => {
    const cloningSpace = toast.loading("Cloning space", { duration: 9000 });
    try {
      const response = await cloneSpace(userId!, contents.space._id);
      if (response?.data) {
        addSpaceToState(response.data);
        router.push(`/space/${response.data._id}`);
      }
      toast.dismiss(cloningSpace);
      toast.success("Space cloned");
    } catch (err) {
      toast.dismiss(cloningSpace);
      if (isAxiosError(err)) {
        let data;
        try {
          data = JSON.parse(err?.request?.response);
          const spaceDetails = data.space_details;
          addSpaceToState({
            _id: spaceDetails.id,
            name: spaceDetails.name,
            visibility: spaceDetails.visibility,
          });
          router.push(`/space/${spaceDetails.id}`);
          toast.success("Space cloned");
        } catch {}
        toast.error(data.message);
      }
    }
  };

  return (
    <div
      className="rounded-2xl shadow-lg px-4 py-3 bg-black cursor-pointer dark:bg-white text-white dark:text-black dark:white font-semibold font-sans flex flex-row"
      onClick={handleClone}
    >
      <Icon icon="pajamas:download" className="w-4 h-4 mt-0.5 mr-1" />
      <span className="text-sm truncate font-sans font-semibold">
        Clone space
      </span>
    </div>
  );
};

export default CloneSpace;
