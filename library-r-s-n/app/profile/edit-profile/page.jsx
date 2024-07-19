import ProfileWrapper from "@/components/profile/ProfileWrapper";
import { getInitialUserData } from "@/supabase/actions/supabase-actions";
import { supabaseAppServerClient } from "@/supabase/server";

export default async function EditProfile() {
  const supabase = supabaseAppServerClient();
  const [{ username, email, address, phone, profile_picture, wallet }] =
    await getInitialUserData();
  console.log(profile_picture);

  return (
    <div className="mt-24 flex flex-col items-center justify-center ">
      <ProfileWrapper
        username={username}
        email={email}
        address={address}
        phone={phone}
        profile_picture={profile_picture}
        wallet={wallet}
        size={200}
      />
    </div>
  );
}
