"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "./auth-client";
import { useRouter } from "next/navigation";

export const Logout = () => {
  const router = useRouter();

  return (
    <Button
      onClick={async () => {
        await authClient.signOut();
        router.replace("/login");
        router.refresh();
      }}
    >
      Log out
    </Button>
  );
};
