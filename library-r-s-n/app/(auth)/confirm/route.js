import { NextResponse } from "next/server";

import { supabaseAppServerClient } from "@/supabase/server";

export async function GET(request)
{
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type')
  const next = searchParams.get('next') ?? '/home'

  const redirectTo = request.nextUrl.clone()
  redirectTo.pathname = next
  redirectTo.searchParams.delete('token_hash')
  redirectTo.searchParams.delete('type')

  if(token_hash && type)
  {
    const supabase = supabaseAppServerClient()
    const { error, data } = await supabase.auth.verifyOtp({ type, token_hash })

    if(!error)
    {
      redirectTo.searchParams.delete('next')
      return NextResponse.redirect(redirectTo)
    }

  }

  //Redirect to error page/back to login due to error with OTP verification
  redirectTo.pathname = 'login?message=Could not verify OTP'
  return NextResponse.redirect(redirectTo)


}