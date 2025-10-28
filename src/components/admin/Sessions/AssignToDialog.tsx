"use client";

import Dropdown from "@/components/Dropdown";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogProps } from "@/model/shared.models";
import { User } from "@/model/user.models";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const AssignToDialog = ({ open, setOpen, item }: DialogProps<User>) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<string>();
  const [search, setSearch] = useState<string>("");

  const emails = [
    { value: "1", label: "ali.aboshady@badgewell.com" },
    { value: "2", label: "hussein.shaltout@badgewell.com" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[400px] w-[calc(100%-2rem)] rounded-lg">
        <DialogHeader className="text-left">
          <DialogTitle className="text-xl">Assign to</DialogTitle>
        </DialogHeader>

        <Dropdown
          items={emails}
          selected={selected}
          placeholder={t("Enter email")}
          setSelected={setSelected}
          searchable
          searchValue={search}
          setSearchValue={setSearch}
        />

        <DialogFooter className="flex flex-row justify-end gap-2">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>

          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AssignToDialog;
