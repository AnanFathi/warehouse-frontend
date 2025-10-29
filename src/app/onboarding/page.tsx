import Link from "next/link";
import getTranslation from "../../../i18n";
import DesignStatsSVG from "../../../public/svgs/DesignStatsSVG";
import DotPattern from "../../components/login/DotPattern";
import { DropdownLanguage } from "@/components/DropdownLanguage";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { styleSplitText } from "@/lib/utils";

export default async function Onboarding() {
  const { t } = await getTranslation();

  return (
    <div className="relative flex flex-row w-full h-screen justify-center items-center">
      <div className="absolute top-0 start-0 w-full h-full">
        <DotPattern
          bigSize={24}
          smallSize={14}
          spacing={60}
          color="#9E1E2207"
        />
      </div>

      <div className="w-[700px] flex flex-col items-center text-center gap-10 z-10 px-4 lg:px-0">
        <DesignStatsSVG className="w-full sm:w-[600px]" />

        <p className="text-2xl lg:text-3xl text-neutral-800 transition-all">
          {styleSplitText(t("SUCCESSFULLY_LOGGED"), [
            "text-primary font-semibold",
            "text-primary font-semibold",
          ])}
        </p>

        <Button asChild className="w-full sm:w-72 py-7 text-lg font-semibold rounded-lg transition-all">
          <Link href="/dashboard" className="flex gap-4">
            <p>{t("GO_TO_DASHBOARD")}</p>
            <ArrowRightIcon weight="bold" className="rtl:rotate-180" />
          </Link>
        </Button>
      </div>

      <div className="absolute top-4 end-4">
        <DropdownLanguage />
      </div>
    </div>
  );
}
