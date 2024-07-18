import CardWrapper from "@/components/auth/CardWrapper";
import { Form, FormGroup, FormLabel, Input } from "@/components/ui/Forms";
import { StyledButton } from "../ui/StyledButton";
import { signUpWithEmailAndPassword } from "@/supabase/actions/supabase-actions";
import { supabaseAppServerClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginForm() {
  const supabase = supabaseAppServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) redirect("/home");

  return (
    <CardWrapper
      headerTitle="Welcome :D"
      headerLabel="Sign Up Here"
      redirectButtonLabel="Already have an account?"
      redirectButtonHref="/login"
      showSocial={true}
    >
      <Form action={signUpWithEmailAndPassword}>
        <FormGroup>
          <FormLabel htmlFor="username">Name</FormLabel>
          <Input
            id="username"
            type="text"
            name="username"
            //value={formData.name}
            //onChange={handleChange}
            placeholder={"Namey"}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            placeholder={"user@email.com"}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            name="password"
            // value={formData.password}
            // onChange={handleChange}
            placeholder={"******"}
            required
          />
        </FormGroup>

        <StyledButton
          variant="secondary"
          size="md"
          className={"w-full"}
          type="submit"
        >
          Enter Librazen
        </StyledButton>
      </Form>
    </CardWrapper>
  );
}
