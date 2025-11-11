"use client";

import Image from "next/image";
import { UploadType } from "@/models/shared.model";
import { ArmchairIcon, UserIcon } from "@phosphor-icons/react/dist/ssr";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  src: string;
  label: string;
  type: UploadType;
  className?: string;
};

const Avatar = ({ src, label, type, className }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row gap-5 items-center">
        <button
          disabled={!src}
          onClick={src ? () => setOpen(true) : null}
          className={twMerge(
            "relative bg-neutral-300 w-10 h-10 overflow-hidden rounded-full flex justify-center items-center",
            className
          )}
        >
          {src ? (
            <Image
              src={src}
              alt="Profile preview"
              fill
              className="object-contain"
            />
          ) : type === "user" ? (
            <UserIcon className="w-full h-full p-2" />
          ) : (
            <ArmchairIcon className="w-full h-full p-2" />
          )}
        </button>
        {label}
      </div>

      {src && <ImageFullscreen open={open} setOpen={setOpen} src={src} />}
    </>
  );
};

export default Avatar;

const ImageFullscreen = ({
  open,
  setOpen,
  src,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
  src: string;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full h-full !max-w-[calc(100%-2rem)] sm:!max-w-[calc(100%-6rem)] md:!max-w-[calc(100%-10rem)] !max-h-[calc(100%-2rem)] sm:!max-h-[calc(100%-6rem)] md:!max-h-[calc(100%-10rem)] rounded-lg">
        <DialogTitle className="text-xl" />
        <Image src={src} alt="Item" fill className="object-contain" />
      </DialogContent>
    </Dialog>
  );
};
