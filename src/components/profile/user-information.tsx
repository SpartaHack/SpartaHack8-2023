"use client";
import { ImageUpload } from "@/helpers/image-upload";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Link } from "@nextui-org/react";
import EditAccordion from "@/components/profile/edit-accordion";
import Streaks from "./streaks";
import { useUserStore } from "@/context/user-context";
import useStore from "@/hooks/use-store";
import { auth } from "../../../db/firebase";
import { toast } from "sonner";
import { getPortalLink } from "@/app/api/payment";
import formatDate from "@/functions/date-formatter";

const UserInformation = () => {
  const userData = useStore(useUserStore, (state) => state.userData);
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setSelectedImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubscriptions = async () => {
    if (!auth.currentUser?.uid) {
      toast.error("Please sign in to handle subscriptions");
    } else {
      const response = await getPortalLink(auth.currentUser?.uid);
      router.push(`${response?.data}`);
    }
  };

  return (
    <div className="md:ml-10 md:mt-6 md:mr-10 lg:ml-20 lg:mt-12 lg:mr-20 ml-5 mr-5 mt-5">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col justify-between bg-absolute_white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-xl px-3 pt-5 pb-1 lg:w-[65%]">
          <div className="flex flex-row ml-2 mr-2">
            <ImageUpload
              onChange={handleImageChange}
              src={selectedImage || userData?.user_profile.photo_url!}
            />
            <div className="flex flex-col ml-10">
              <h1 className="text-xl">{userData?.user.full_name}</h1>
              <h2 className="text-sm mt-2">
                Joined {formatDate(userData?.user.created_at!)}
              </h2>
            </div>
          </div>
          <EditAccordion
            photo={selectedImage || userData?.user_profile.photo_url!}
            title={
              <h1 className="text-center text-[15px] p-2 rounded-xl border border-neutral-200 dark:border-neutral-700">
                Edit Profile
              </h1>
            }
          />
        </div>
        <div className="flex flex-col justify-between bg-absolute_white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 w-full lg:h-[230px] mt-5 lg:mt-0 lg:ml-5">
          <Streaks />
        </div>
      </div>
      <Link
        size="sm"
        className="cursor-pointer text-black dark:text-white mt-4 ml-1"
        underline="always"
        onClick={handleSubscriptions}
      >
        Manage Subscriptions
      </Link>
    </div>
  );
};

export default UserInformation;
