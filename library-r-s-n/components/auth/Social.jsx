import { StyledButton } from "../ui/StyledButton";
import { FaGithub } from "react-icons/fa"


export function Social()
{
    return (
        <div className="flex items-center justify-center w-full gap-x-2">
            <StyledButton size="md" variant="outline" className={"flex p-1 w-full"} onClick={() => {}}>
                <FaGithub className="h-7 w-7"/>
            </StyledButton>
        </div>
    )
}