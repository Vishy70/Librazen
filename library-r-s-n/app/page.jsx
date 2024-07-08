import { LoginButton } from "@/components/auth/LoginButton";
import { StyledButton } from "@/components/ui/StyledButton";

export default function LandingPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-blue-700">
      <div className=" my-10 text-center">
        <h1 className="text-8xl text-violet-100 font-bold drop-shadow-xl">
          Librazen
        </h1>
        <p className="text-violet-100">
          A fully fledged bookstore, just for you :3
        </p>
      </div>
      <LoginButton>
        {/* <button className="min-w-32 bg-violet-100 text-xl font-medium p-2 rounded-lg drop-shadow-xl">
          Get started
        </button> */}
        <StyledButton variant="primary">
          Get started
        </StyledButton>
      </LoginButton>
    </div>
  );
}
