"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

type Props = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

const ConfirmationDialog = ({ open, setOpen }: Props) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] w-[calc(100%-2rem)] rounded-lg gap-10">
        <DialogHeader className="text-left">
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>

        <DialogFooter className="flex flex-row justify-center gap-2">
          <DialogClose asChild>
            <Button variant="secondary" className="w-full">Cancel</Button>
          </DialogClose>

          <Button type="submit" className="w-full">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
