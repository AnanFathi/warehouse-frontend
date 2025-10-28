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
import { Label } from "@/components/ui/label";
import { DialogProps } from "@/model/shared.models";
import { User } from "@/model/user.models";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MoveSessionDialog = ({ open, setOpen, item }: DialogProps<User>) => {
  const { t } = useTranslation();
  const [selectedUsername, setSelectedUsername] = useState<string>();
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<string>();
  const [searchUsername, setSearchUsername] = useState<string>("");
  const [searchBeneficiary, setSearchBeneficiary] = useState<string>("");

  const usernames = [
    { value: "1", label: "ali.aboshady" },
    { value: "2", label: "hussein.shaltout" },
  ];

  const beneficiaries = [
    { value: "1", label: "Beneficiary 1" },
    { value: "2", label: "Beneficiary 2" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[800px] w-[calc(100%-2rem)] rounded-lg">
        <DialogHeader className="text-left">
          <DialogTitle className="text-xl">Edit admin</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5">
          <div className="flex flex-col gap-2">
            <Label>Username / case management number</Label>

            <Dropdown
              items={usernames}
              selected={selectedUsername}
              placeholder={t("Enter Username / case management number")}
              setSelected={setSelectedUsername}
              searchable
              searchValue={searchUsername}
              setSearchValue={setSearchUsername}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Beneficiary Name</Label>
            <Dropdown
              items={beneficiaries}
              selected={selectedBeneficiary}
              placeholder={t("Enter Beneficiary Name")}
              setSelected={setSelectedBeneficiary}
              searchable
              searchValue={searchBeneficiary}
              setSearchValue={setSearchBeneficiary}
            />
          </div>
        </div>

        <DialogFooter className="flex flex-row justify-end gap-2">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>

          <Button type="submit">Edit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MoveSessionDialog;
