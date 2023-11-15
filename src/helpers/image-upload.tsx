import { ImageUploadProps } from "../../types";

export const ImageUpload = ({ onChange, src }: ImageUploadProps) => (
    <label htmlFor="photo-upload" className="cursor-pointer">
        <div className="relative w-[45px] border h-[45px] flex items-center justify-center overflow-hidden rounded-full">
            <img src={src} alt="" className="w-auto h-full"/>
        </div>
        <input id="photo-upload" type="file" onChange={onChange} className="hidden"/>
    </label>
)