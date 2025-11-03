"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import InputGroupPassword from "../composites/Auth/InputGroupPassword";

export default function LoginForm() {
  
  return (
    <form className="">
      <div className="mb-4">
        <Label htmlFor="email-address" className="block mb-3">
          Email address
        </Label>
        <Input
          type="email"
          name="email-address"
          id="email-address"
          placeholder="Masukan email anda"
          className="h-11"
        />
      </div>
      <InputGroupPassword name="password" id="password">Password</InputGroupPassword>
      <Button
        type="submit"
        name="login-manual-trigger"
        id="login-manual-trigger"
        className="w-full h-11"
      >
        Masuk Sekarang
      </Button>
    </form>
  );
}
