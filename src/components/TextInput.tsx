"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getTailwindColor } from "@/lib/utils";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
import { HTMLInputTypeAttribute, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  value: string;
  setValue: (val: string) => void;
  type?: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  isPassword?: boolean;
  className?: string;
};

const TextInput = ({
  value,
  setValue,
  type = "text",
  label,
  placeholder,
  icon,
  isPassword,
  className,
}: Props) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <Label htmlFor="email" className="text-lg text-primary">
          {label}
        </Label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute start-4 top-1/2 -translate-y-1/2">
            {icon}
          </div>
        )}

        <Input
          value={value}
          onChange={(e) => {
            e.preventDefault();
            setValue?.(e.target.value);
          }}
          type={isPassword && !isPasswordShown ? "password" : type}
          placeholder={placeholder}
          className={twMerge(
            `h-14 border-2 focus:border-primary rounded-lg ${
              icon ? "ps-12" : ""
            } ${isPassword ? "pe-12" : ""}`,
            className
          )}
          style={{ fontSize: 20 }}
        />

        {isPassword && (
          <button
            className="absolute end-4 top-1/2 -translate-y-1/2"
            onClick={() => setIsPasswordShown(!isPasswordShown)}
          >
            {isPasswordShown ? (
              <EyeIcon size={25} color={getTailwindColor("primary")} />
            ) : (
              <EyeSlashIcon size={25} color={getTailwindColor("primary")} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default TextInput;
