import LoginForm from "@/components/login/LoginForm";
import DotPattern from "../../components/login/DotPattern";
import DataReportSVG from "../../../public/svgs/DataReportSVG";
import getTranslation from "../../../i18n";
import { DropdownLanguage } from "@/components/DropdownLanguage";

export default async function Login() {
  const { t } = await getTranslation();

  return (
    <div className="relative flex flex-row w-full h-screen justify-center items-center">
      <div className="w-full lg:w-1/2 px-4 lg:px-8 h-full flex flex-col justify-center items-center transition-all">
        <div className="w-full max-w-[650px] flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-3xl lg:text-4xl transition-all">
              {t("SIGNIN")}
            </p>
            <p className="font-light text-xl lg:text-2xl text-neutral-600 transition-all">
              {t("ENTER_EMAIL_AND_PASSWORD")}
            </p>
          </div>

          <LoginForm />
        </div>
      </div>

      <div className="max-lg:hidden w-[2px] h-[95%] bg-gradient-to-b from-transparent via-primary to-transparent" />

      <div className="max-lg:hidden relative w-1/2 h-full">
        <DotPattern
          bigSize={24}
          smallSize={14}
          spacing={60}
          color="#9E1E2207"
        />

        <div className="absolute top-0 start-0 w-full h-full p-10 xl:p-20 2xl:p-28 transition-all">
          <DataReportSVG className="w-full h-full" />
        </div>
      </div>

      <div className="absolute top-4 end-4">
        <DropdownLanguage />
      </div>
    </div>
  );
}
