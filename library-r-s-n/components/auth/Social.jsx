'use client'

import { OAuthSignIn } from "@/supabase/actions/supabase-actions";
import { StyledButton } from "../ui/StyledButton";
import { FaGithub } from "react-icons/fa";

export function Social() {
  return (
    <form className="flex items-center justify-center w-full gap-x-2">
      <StyledButton
        size="md"
        variant="outline"
        className={"flex p-1 w-full gap-3"}
        onClick={() => {
            window.alert('GitHub button not working right now :(')
        }}
      >
        <FaGithub className="h-7 w-7" />
        Login with Github
      </StyledButton>
    </form>
  );
}

// async () => {
//     await OAuthSignIn('github')
// }
