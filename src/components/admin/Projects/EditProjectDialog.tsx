"use client";

import { DatePicker } from "@/components/DatePicker";
import Dropdown from "@/components/Dropdown";
import TextInput from "@/components/TextInput";
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

const EditProjectDialog = ({ open, setOpen, item }: DialogProps<User>) => {
  const { t } = useTranslation();
  const [date, setDate] = useState<Date>();

  const sessionTypes = [
    { value: "1", label: "Type 1" },
    { value: "2", label: "Type 2" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[800px] w-[calc(100%-2rem)] rounded-lg">
        <DialogHeader className="text-left">
          <DialogTitle className="text-xl">Edit Project</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5">
          <TextInput
            label={t("Project name")}
            placeholder={t("Enter project name")}
            value={""}
            setValue={() => {}}
            className="w-full"
          />

          <div className="flex flex-col gap-2">
            <Label>Session type</Label>
            <Dropdown items={sessionTypes} selected="" setSelected={() => {}} />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Date</Label>
            <DatePicker
              date={date}
              setDate={setDate}
              className="w-full"
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

export default EditProjectDialog;
