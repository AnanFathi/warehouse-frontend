"use client";

import { BellIcon, StarIcon, UserIcon } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Separator } from "./ui/separator";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { displayAdminNames } from "@/lib/staticKeys";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const route = pathname.split("/")[1];
  const title = displayAdminNames[route];

  return (
    <div className="w-full px-20 py-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-row justify-between items-center">
        <p className="bg-white w-full text-3xl font-semibold">
          {t(title) || route}
        </p>

        <div className="flex flex-row gap-4">
          <Badge
            variant="default"
            className="text-lg gap-2 rounded-full text-nowrap"
          >
            <StarIcon size={18} weight="fill" />
            {t("SUPER_ADMIN")}
          </Badge>

          <button className="bg-secondary p-1.5 rounded-full">
            <BellIcon className="fill-primary" size={25} />
          </button>

          <button className="bg-secondary p-1.5 rounded-full">
            <UserIcon className="fill-primary" size={25} />
          </button>
        </div>
      </div>

      <Separator />

      {/* Body */}
      <div className="bg-white w-full h-[600px] p-4 border rounded-2xl">{children}</div>
    </div>
  );
};

export default PageLayout;
