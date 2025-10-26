"use client";

import TextInput from "@/components/TextInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getTailwindColor } from "@/lib/utils";
import { DialogSettings } from "@/model/shared.models";
import { User } from "@/model/user.models";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { useTranslation } from "react-i18next";

const EditAdminDialog = ({ open, setOpen, item }: DialogSettings<User>) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <form>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              {item?.username}
            </DialogDescription>
          </DialogHeader>

          <TextInput
            label={t("USERNAME")}
            placeholder={t("ENTER_USERNAME")}
            value={""}
            setValue={() => {}}
            icon={
              <EnvelopeSimpleIcon
                size={25}
                color={getTailwindColor("primary")}
              />
            }
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditAdminDialog;
