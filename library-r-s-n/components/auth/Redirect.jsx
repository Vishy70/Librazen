import Link from "next/link"
import { StyledButton } from "../ui/StyledButton"
import clsx from "clsx"


export function Redirect({ href, label, className='' })
{
    return(
        <StyledButton variant="link" size="sm" className={clsx("flex font-normal w-fit", className)}>
            <Link href={href}>
                {label}
            </Link>
        </StyledButton>
    )
}