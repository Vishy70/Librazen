"use client"

import { useRouter } from "next/navigation";

//NOTE: Get rid of this button, add routing functionality to StyledButton!
export function LoginButton({ children, mode="redirect", isChild })
{
    /*
        Component for a general login button
        - children renders the ui for the 'button'
        - mode can be "redirect" or "modal"
        - isChild is to show
     */

    const router = useRouter()
    const onClick = () =>
    {
        router.push('/login');
    }

    if(mode === 'modal')
    {
        return (
            <span onClick={onClick} className="cursor-pointer">
                Clueless
            </span>
        )
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
    

}