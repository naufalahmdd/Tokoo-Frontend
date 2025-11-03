"use client";

import InputGroupPassword from "../composites/Auth/InputGroupPassword";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function RegisterForm() {
  return (
    <form className="">
      <div className="mb-4">
        <Label htmlFor="fullname" className="block mb-3">
          Nama Lengkap
        </Label>
        <Input
          type="text"
          name="nama-lengkap"
          id="nama-lengkap"
          placeholder="Masukan nama lengkap anda"
          className="h-11"
        />
      </div>
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
      <InputGroupPassword name="password" id="password">
        Password
      </InputGroupPassword>
      <Button
        type="submit"
        name="login-manual-trigger"
        id="login-manual-trigger"
        className="w-full h-11"
      >
        Daftar Sekarang
      </Button>
    </form>
  );
}
