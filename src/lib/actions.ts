"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

interface SignInState {
  error: string | null;
}

export async function signIn(
  prevState: SignInState,
  formData: FormData
): Promise<SignInState> {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  console.log(data);

  //  Basic field validation
  if (!data.email || !data.password) {
    return { error: "Por favor, complete todos los campos" };
  }

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log("Sign in error:", error.message);
    return { error: "Credenciales inválidas." };
  }

  // On success, redirect
  redirect("/");
}

export async function signUp(prevState: SignInState, formData: FormData): Promise<SignInState> {
  const supabase = await createClient();

  const credentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    passwordConfirmation: formData.get("passwordConfirmation") as string,
  };

  //  Basic field validation
  if (!credentials.email || !credentials.password || !credentials.passwordConfirmation) {
    return { error: "Por favor, complete todos los campos" };
  }

  const { data, error } = await supabase.auth.signUp(credentials);

  if (error) {
    console.log("Sign in error:", error.message);
    return { error: "Credenciales inválidas." };
  } else if (data.user && data.user.identities && data.user.identities.length === 0) {
    // User already exists
    return { error: "El usuario ya existe. Por favor, inicie sesión." };
  }

  // On success, redirect
  redirect("/");
}

export async function signOut(){
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/auth/sign-in");
}
