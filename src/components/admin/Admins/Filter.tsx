"use client";

import { Dropdown } from "@/components/Dropdown";
import TextInput from "@/components/TextInput";
import { getTailwindColor } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";
import { useTranslation } from "react-i18next";

const Filter = () => {
  const { t } = useTranslation();
  const roles = ["ADMIN", "SUPER_ADMIN"];

  return (
    <div className="flex flex-row">
      <div className="flex flex-row gap-4">
        <TextInput
          placeholder={t("Search")}
          value={""}
          setValue={() => {}}
          icon={
            <MagnifyingGlassIcon
              size={25}
              color={getTailwindColor("neutral-500")}
            />
          }
          className="h-12 w-96 rounded-xl"
        />

        <Dropdown
          items={roles}
          chosenValue={""}
          placeholder={t("ROLE")}
          setChosenValue={(val: string | string[]) => {}}
          buttonClassName="h-full w-40"
        />
      </div>
    </div>
  );
};

export default Filter;
