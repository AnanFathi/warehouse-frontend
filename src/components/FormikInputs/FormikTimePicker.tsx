import { FormikValues } from "formik";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ClockIcon } from "@phosphor-icons/react";

type Props = {
  formik: FormikValues;
  name: string;
  label?: string;
  placeholder?: string;
};

const FormikTimePicker = ({ formik, name, label, placeholder }: Props) => {
  return (
    <div className="flex flex-col gap-2 relative">
      {label && <Label>{label}</Label>}

      <div className="relative">
        <Input
          type="time"
          placeholder={placeholder}
          value={formik.values[name]}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name={name}
          className={`
            h-12 w-full bg-white rounded-lg pr-12 hover:bg-accent border-2
            [&::-webkit-calendar-picker-indicator]:opacity-0
            [&::-webkit-calendar-picker-indicator]:absolute
            [&::-webkit-calendar-picker-indicator]:end-0
            [&::-webkit-calendar-picker-indicator]:start-[70px]
            [&::-webkit-calendar-picker-indicator]:w-full
            [&::-webkit-calendar-picker-indicator]:h-full
            [&::-webkit-calendar-picker-indicator]:cursor-pointer
          `}
        />

        <ClockIcon
          size={18}
          className="text-primary h-full absolute top-0 bottom-0 end-4 flex items-center justify-center pointer-events-none"
        />
      </div>
    </div>
  );
};

export default FormikTimePicker;
