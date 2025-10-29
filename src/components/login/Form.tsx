"use client";

import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { getTailwindColor, handleErrorToast } from "@/lib/utils";
import { EnvelopeSimpleIcon, KeyIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { login, LoginPayload } from "@/actions/auth/login.action";
import { ServerResponse } from "@/model/shared.models";
import { Auth } from "@/model/user.model";
import { useRouter } from "next/navigation";
import { useTopLoader } from "nextjs-toploader";
import { ROUTES } from "@/lib/staticKeys";
import { toast } from "react-toastify";
import TextInput from "@/components/TextInput";
import useRequest from "@/hooks/useRequest";

const Form = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { start: startTopLoader } = useTopLoader();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { request: requestLogin, isLoading } = useRequest<
    LoginPayload,
    ServerResponse<Auth>
  >(login);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await requestLogin({ username, password });

    if (res?.data) {
      toast.success(res?.message);
      startTopLoader();

      setTimeout(() => {
        router.push(ROUTES.root?.url);
      }, 200);
    } else {
      handleErrorToast(res?.error);
    }
  };

  const valid = username && password;

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-8">
      <TextInput
        label={t("USERNAME")}
        placeholder={t("ENTER_USERNAME")}
        value={username}
        setValue={setUsername}
        labelClassName="text-lg text-primary"
        inputClassName="h-14 focus:border-primary"
        fontSize={20}
        icon={
          <EnvelopeSimpleIcon size={25} color={getTailwindColor("primary")} />
        }
      />

      <TextInput
        label={t("PASSWORD")}
        placeholder={t("ENTER_PASSWORD")}
        value={password}
        setValue={setPassword}
        icon={<KeyIcon size={25} color={getTailwindColor("primary")} />}
        labelClassName="text-lg text-primary"
        inputClassName="h-14 focus:border-primary"
        fontSize={20}
        isPassword
      />

      <Button
        disabled={!valid || isLoading}
        className={`h-12 rounded-lg text-xl ${
          valid ? "text-white" : "text-primary"
        }`}
        variant={valid ? "default" : "secondary"}
        type="submit"
      >
        {t("SIGNIN")}
      </Button>
    </form>
  );
};

export default Form;
