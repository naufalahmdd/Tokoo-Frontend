"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function OauthLoginButton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
      <Button
        variant="outline"
        type="button"
        name="login-google"
        id="login-google"
        className="h-11"
      >
        <Image src="/google.svg" alt="Google Icon" width={27} height={27} />{" "}
        Google
      </Button>
      <Button
        variant="outline"
        type="button"
        name="login-facebook"
        id="login-facebook"
        className="h-11"
      >
        <Image src="/facebook.svg" alt="Facebook Icon" width={27} height={27} />{" "}
        Facebook
      </Button>
    </div>
  );
}
