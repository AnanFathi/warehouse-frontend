import LoginForm from "@/components/login/LoginForm";
import getTranslation from "../../../i18n";
import { DropdownLanguage } from "@/components/DropdownLanguage";

export default async function Login() {
  const { t } = await getTranslation();

  return (
    <div className="relative flex w-full h-screen justify-center items-center">
      <div className="w-full max-w-[650px] flex flex-col gap-12 px-6 sm:px-0 transition-all">
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

      <div className="absolute top-4 end-4">
        <DropdownLanguage />
      </div>
    </div>
  );
}
