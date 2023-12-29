"use client";

import { useState } from "react";
import { uploadContent } from "../api/content";

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null); // New state for storing the uploaded file URL

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      try {
        const data = await uploadContent(file);
        setUploadedFileName(file.name);
        setUploadedFileUrl(data.content_url); // Update the file URL state
      } catch (error) {
        console.error("Upload failed", error);
      }
    } else {
      console.error("Upload failed");
    }
  };

  // Function to render uploaded file name and iframe
  const renderUploadedFile = () => {
    return uploadedFileUrl ? (
      <div>
        <p>File uploaded: {uploadedFileName}</p>
        <iframe src={uploadedFileUrl} width="100%" height="600px"></iframe>
      </div>
    ) : null; // Or some placeholder if needed
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {renderUploadedFile()}
    </div>
  );
};

export default UploadPage;
