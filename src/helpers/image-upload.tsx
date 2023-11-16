export type ImageUploadProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    src: string,
  }
  
  export const ImageUpload = ({
    onChange,
    src
  }: ImageUploadProps) => (
    <label className="cursor-pointer rounded-full">
      <div className="relative w-[50px] h-[50px] flex items-center border justify-center overflow-hidden rounded-full">
        <img src={src} className="w-auto h-full" />
      </div>
      <input type="file" onChange={onChange} accept="image/*" className="hidden" />
    </label>
  )