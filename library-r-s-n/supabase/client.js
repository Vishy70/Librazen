import { createBrowserClient } from "@supabase/ssr";

export const supabaseBrowserClient = createBrowserClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
)