"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function supabaseServerClient()
{
    const cookieStore = cookies();

    return createServerClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll()
                {
                    return cookieStore.getAll()//(name)?.value
                },
                setAll(cookiesToSet)//name, value, options
                {
                    cookiesToSet.forEach({ name, value, options })
                    {
                        cookieStore.set(name, value, options)
                    }
                },
                // remove(name, options)
                // {
                //     cookieStore.set({name, value: '', ...options})
                // }
            }
        }
    )
}