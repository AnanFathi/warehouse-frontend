"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { getTailwindColor } from "@/lib/utils";
import { EnvelopeSimpleIcon, KeyIcon } from "@phosphor-icons/react";
import TextInput from "@/components/TextInput";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const valid = email && password;

  return (
    <div className="flex flex-col gap-8">
      <TextInput
        label={t("USERNAME")}
        placeholder={t("ENTER_USERNAME")}
        value={email}
        setValue={setEmail}
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
        isPassword
      />

      <Button
        disabled={!valid}
        className={`h-12 rounded-lg text-xl ${
          valid ? "text-white" : "text-primary"
        }`}
        variant={valid ? "default" : "secondary"}
      >
        {t("SIGNIN")}
      </Button>
    </div>
  );
};

export default Form;
