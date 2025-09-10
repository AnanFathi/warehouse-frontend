import { styleSplitText } from "@/lib/utils";
import getTranslation from "../../../i18n";
import DesignStatsSVG from "../../../public/svgs/DesignStatsSVG";
import DotPattern from "../../components/signin/DotPattern";
import { DropdownLanguage } from "@/components/DropdownLanguage";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

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

      <div className="w-[700px] flex flex-col items-center text-center gap-10 z-10">
        <DesignStatsSVG className="w-[600px]" />
        <p className="text-3xl text-neutral-800">{styleSplitText(t("SUCCESSFULLYLOGGED"), ["text-primary font-semibold", "text-primary font-semibold"])}</p>
        
        <Button asChild className="w-72 py-7 text-lg font-semibold rounded-lg">
          <Link href="/dashboard" className="flex gap-4">
            <p>Go to dashboard</p>
            <ArrowRightIcon weight="bold" />
          </Link>
        </Button>
      </div>

      <div className="absolute top-4 end-4">
        <DropdownLanguage />
      </div>
    </div>
  );
}
