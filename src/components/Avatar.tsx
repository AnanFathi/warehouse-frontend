import { UploadType } from "@/models/shared.model";
import { ArmchairIcon, UserIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

type Props = {
  src: string;
  label: string;
  type: UploadType;
};

const Avatar = ({ src, label, type }: Props) => {
  return (
    <div className="flex flex-row gap-5 items-center">
      <div className="relative bg-neutral-300 w-10 h-10 overflow-hidden rounded-full flex justify-center items-center">
        {src ? (
          <Image
            src={src}
            alt="Profile preview"
            fill
            className="object-contain"
          />
        ) : type === "user" ? (
          <UserIcon size={25} />
        ) : (
          <ArmchairIcon size={25} />
        )}
      </div>
      {label}
    </div>
  );
};

export default Avatar;
