"use client";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { uploadContent } from "@/app/api/content";
import { toast } from "sonner";
import { ContentUploaderProps } from "../../../types";
import useAuth from "@/hooks/use-auth";
import { isAxiosError } from "axios";
import { useErrorStore } from "@/context/error-context";

const ContentUploader = ({ handleLinkUpload }: ContentUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const userId = useAuth();
  const setError = useErrorStore((state) => state.setError);
  const setToast = useErrorStore((state) => state.setToast);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0];
      if (selectedFile.size > 10000000) {
        toast.error("File size exceeds 10MB");
        return;
      }
      setFile(selectedFile);
      await handleUpload(selectedFile);
    }
  };

  const handleUpload = async (file: File) => {
    if (file) {
      try {
        const response = await uploadContent(file, userId!);
        handleLinkUpload(response?.data.content_url);
      } catch (err) {
        if (isAxiosError(err)) {
          setToast!(true);
          setError(err);
        }
      }
    } else {
      toast.error("Upload failed: No file selected");
    }
  };

  return (
    <label
      htmlFor="file-upload"
      className="flex flex-col h-40 cursor-pointer rounded-xl border-[2px] border-[#E4E4E7] dark:border-[#3F3F45] items-center justify-center"
    >
      <Icon
        icon="ph:plus"
        className=" text-neutral-600 dark:text-neutral-400 h-10 w-10 pb-2"
      />
      <span className="text-sm text-neutral-600 dark:text-neutral-400">
        Upload PDFs
      </span>
      <input
        accept="application/pdf"
        type="file"
        id="file-upload"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <span className="text-sm text-neutral-600 dark:text-neutral-400">
        (max size 10MB)
      </span>
    </label>
  );
};

export default ContentUploader;
