"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";

type Props = {
  itemsPerPage: number;
  setCurrentItemsPerPage: (val: number) => void;
};

export function DropdownItemsPerPage({
  itemsPerPage,
  setCurrentItemsPerPage,
}: Props) {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const itemsPerPageList: Record<string, number> = {
    "10": 10,
    "20": 20,
    "50": 50,
    "100": 100,
  };

  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild className="pointer-events-auto">
        <Button
          variant="ghost"
          className="p-2 text-white hover:text-white font-medium rounded-md bg-primary hover:bg-primary/80 focus:outline-none focus-visible:outline-none"
        >
          {t(itemsPerPageList[itemsPerPage?.toString()]?.toString())}
          <div className="bg-white rounded-full p-0.5">
            <CaretDownIcon
              className={`fill-primary transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={itemsPerPage?.toString()}
          onValueChange={(value) => setCurrentItemsPerPage?.(parseInt(value))}
        >
          {Object.keys(itemsPerPageList).map((item) => (
            <DropdownMenuRadioItem
              key={item}
              value={item}
              className="text-neutral-600 font-medium"
            >
              {t(item)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
