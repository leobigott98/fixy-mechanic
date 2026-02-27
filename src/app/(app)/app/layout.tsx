// src/app/(admin)/layout.tsx
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AppShell from "@/components/app/AppShell";

export default async function AppLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) redirect("/auth/sign-in");

  return <AppShell>{children}</AppShell>;
}