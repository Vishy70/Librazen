"use server";

import { supabaseAppServerClient } from "@/supabase/server";

export async function getInitialUserData() {
  const supabase = supabaseAppServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('customers')
    .select('*')
    .eq('customer_id', user.id); 

  if (error) {
    console.error('Error selecting customer:', error);
    return null;
  }

  return data;
}
