"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";
import { CalendarDotsIcon } from "@phosphor-icons/react/dist/ssr";
import { useTranslation } from "react-i18next";

interface Props {
  mode?: "single" | "range";
  date: Date | DateRange;
  setDate: ((value: Date) => void) | ((value: DateRange) => void);
  className?: string;
  placeholder?: string;
}

export function DatePicker({
  mode = "single",
  date,
  setDate,
  className,
  placeholder = "PICK_A_DATE",
}: Props) {
  const { t } = useTranslation();
  const isRange = mode === "range";

  const displayText = () => {
    if (isRange && date && (date as DateRange).from) {
      const range = date as DateRange;
      if (range.to)
        return `${format(range.from!, "PPP")} - ${format(range.to, "PPP")}`;
      return format(range.from!, "PPP");
    } else if (!isRange && date instanceof Date) {
      return format(date, "PPP");
    }
    return placeholder;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "h-12 border-2 justify-between items-center text-base font-normal",
            !date && "text-muted-foreground",
            className
          )}
        >
          <p className="truncate">{t(displayText())}</p>
          <CalendarDotsIcon className="fill-primary h-4 w-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        {isRange ? (
          <Calendar
            mode="range"
            selected={date as DateRange}
            onSelect={(val) => setDate(val as any)}
            captionLayout="dropdown"
            classNames={{ today: "bg-secondary/50 rounded-md text-primary" }}
          />
        ) : (
          <Calendar
            mode="single"
            selected={date as Date}
            onSelect={(val) => setDate(val as any)}
            captionLayout="dropdown"
            classNames={{ today: "bg-secondary/50 rounded-md text-primary" }}
          />
        )}
      </PopoverContent>
    </Popover>
  );
}
