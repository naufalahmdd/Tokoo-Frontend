"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

type InputGroupPasswordProps = {
    name: string;
    id: string;
    children?: React.ReactNode;
}

export default function InputGroupPassword(props: InputGroupPasswordProps) {
    const {name, id, children="password"} = props
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  return (
    <div className="mb-5">
      <Label htmlFor="password" className="block mb-3">
        {children}
      </Label>
      <div className="relative flex items-center">
        <Input
          type={showPassword ? "text" : "password"}
          name={name}
          id={id}
          placeholder="Masukan password anda"
          className="h-11"
        />
        {showPassword ? (
          <Button
            variant="ghost"
            size="icon"
            type="button"
            name="hide-password"
            id="hide-password"
            className="absolute right-1"
            onClick={handleShowPassword}
          >
            <EyeOff />
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            type="button"
            name="show-password"
            id="show-password"
            className="absolute right-1"
            onClick={handleShowPassword}
          >
            <Eye />
          </Button>
        )}
      </div>
    </div>
  );
}
