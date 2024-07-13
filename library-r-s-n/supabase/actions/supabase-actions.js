//These are server actions...
"use server";

import { supabaseAppServerClient } from "@/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signInWithEmailAndPassword(formData) {
  const dataToSend = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const supabase = supabaseAppServerClient();

  const response = await supabase.auth.signInWithPassword(dataToSend);
  const { error, data } = response;

  if (error) {
    console.log(error)
    redirect("/login?message=Could not authenticate user");
  }
  revalidatePath("/", "layout");
  redirect("/home");
}

export async function signUpWithEmailAndPassword(formData) {
  const dataToSend = {
    email: formData.get("email"),
    password: formData.get("password"),
    username: formData.get("username"),
  };

  const supabase = supabaseAppServerClient();

  const response = await supabase.auth.signUp({
    email: dataToSend.email,
    password: dataToSend.password,
    options: {
      data: {
        username: dataToSend.username,
      },
    },
  });
  const { error, data } = response;

  if (error) {
    console.log(error)
    redirect("/register?message=Could not signup user");

  }

  revalidatePath("/", "layout");
  redirect("/home");
}

export async function signOut()
{
  const supabase = supabaseAppServerClient();
  console.log("Signed Out")
  await supabase.auth.signOut()
  return redirect('/')
}