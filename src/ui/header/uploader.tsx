"use client"
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { uploadContent } from "@/app/api/content";
import { toast } from "sonner";
import { ContentUploaderProps } from "../../../types";

const ContentUploader = ({ handleLinkUpload } : ContentUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      await handleUpload(event.target.files[0]);
    }
  };

  const handleUpload = async (file: File) => {
    if (file) {
      try {
        const response = await uploadContent(file);
        handleLinkUpload(response.content_url);
      } catch (error) {
        toast.error("Error uploading file");
      }
    } else {
      toast.error("Upload failed: No file selected");
    }
  };

  return (
    <label htmlFor="file-upload" className="flex flex-col h-40 cursor-pointer rounded-xl border-[2px] border-[#E4E4E7] dark:border-[#3F3F45] items-center justify-center">
      <Icon icon="ph:plus" className="h-10 w-10 pb-2" />
      <span>Upload file</span>
      <input 
        accept="application/pdf"
        type="file" 
        id="file-upload" 
        onChange={handleFileChange} 
        style={{ display: "none" }} 
      />
      <span className="text-sm">(PDFs)</span>
    </label>
  );
};

export default ContentUploader;