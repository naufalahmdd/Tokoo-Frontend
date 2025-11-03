"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Store, UserRound } from "lucide-react";

export default function AuthButton() {
  return (
    <div className="hidden lg:flex items-center gap-4">
      <Button
        asChild
        size="lg"
        variant="outline"
        type="button"
        name="login-trigger"
        id="login-trigger"
        className="font-bold h-11"
      >
        <Link href="/login">
          <UserRound /> Masuk
        </Link>
      </Button>
      <Button
        asChild
        size="lg"
        type="button"
        name="start-selling"
        id="start-selling"
        className="font-bold h-11"
      >
        <Link href="/login">
          <Store /> Mulai Jualan
        </Link>
      </Button>
    </div>
  );
}
