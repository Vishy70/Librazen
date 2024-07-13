import { supabaseAppServerClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = supabaseAppServerClient();
  const { data } = await supabase.auth.getUser();

  //console.log(data)
  const {user: {user_metadata: {email, username}}} = data;
  console.log(email, username)

  return <div className="flex flex-col items-center justify-center">Hi {username}</div>;
}
