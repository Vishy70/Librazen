import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export function supabaseAppServerClient(serverComponent = false) {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    {
      cookies: {
        get(name) {
          //return cookie with the name 'name'
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          //set the cookie
          if (serverComponent) return;
          cookieStore.set(name, value, options);
        },
        remove(name, options) {
          //delete the cookie
          if (serverComponent) return;
          cookieStore.set(name, "", options);
        },
      },
    }
  );
}

export function createSupabaseServerComponentClient() {
  return supabaseAppServerClient(true);
}
