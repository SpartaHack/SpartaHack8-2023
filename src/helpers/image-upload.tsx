import { Icon } from "@iconify/react/dist/iconify.js";
import { ImageUploadProps } from "../../types";
import Image from "next/image";

export const ImageUpload = ({ onChange, src }: ImageUploadProps) => (
  <label className="cursor-pointer rounded-full">
    <div className="relative w-[100px] h-[100px] flex items-center border border-neutral-200 dark:border-neutral-700 justify-center overflow-hidden rounded-md bg-transparent">
      {src && (
        <Image
          src={src!}
          alt="Upload"
          className="w-auto h-full duration-200 hover:opacity-50"
          layout="fill"
          objectFit="cover"
        />
      )}
      <span className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 p-1">
        <Icon
          className="w-8 h-8 text-neutral-400"
          icon="majesticons:camera-line"
        />
      </span>
    </div>
    <input
      type="file"
      onChange={onChange}
      accept="image/*"
      className="hidden"
    />
  </label>
);
