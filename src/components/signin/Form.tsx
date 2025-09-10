"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { getTailwindColor } from "@/lib/utils";
import { EnvelopeSimpleIcon, KeyIcon } from "@phosphor-icons/react";
import TextInput from "@/components/TextInput";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const valid = email && password;

  return (
    <div className="flex flex-col gap-8">
      <TextInput
        label="Username"
        placeholder="Enter username"
        value={email}
        setValue={setEmail}
        icon={
          <EnvelopeSimpleIcon size={25} color={getTailwindColor("primary")} />
        }
      />

      <TextInput
        label="Password"
        placeholder="Enter password"
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
        Sign in
      </Button>
    </div>
  );
};

export default Form;
