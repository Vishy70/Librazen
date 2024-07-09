import Link from "next/link"
import { StyledButton } from "../ui/StyledButton"


export function Redirect({ href, label })
{
    return(
        <StyledButton variant="link" size="sm" className={"flex font-normal w-fit"}>
            <Link href={href}>
                {label}
            </Link>
        </StyledButton>
    )
}