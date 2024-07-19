import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/CardComponents";
import { Redirect } from "@/components/auth/Redirect";
import { StyledParagraph } from "@/components/profile/StyledParagraph";
import { ProfilePic } from "@/components/ui/ProfilePic";

export default function ProfileWrapper({
  //children,
  username,
  email,
  address,
  phone,
  profile_picture,
  wallet,
  redirectButtonLabel = "Edit Profile",
  redirectButtonHref = "/profile/edit-profile",
  size
}) {
  console.log(profile_picture);
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <div
          className={`justify-center text-3xl text-gray-800 font-semibold leading-relaxed tracking-wide rounded-full border-2 p-1 border-violet-500 hover:bg-violet-400 hover:text-white transition-colors cursor-pointer`}
        >
          {username}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row items-center justify-around">
          <ProfilePic profile_picture={profile_picture} size={size}/>
          <div className="flex flex-col">
						<StyledParagraph id={'email'}label={"Email"} text={email}/>
            <StyledParagraph id={'address'} label={"Address"} text={address}/>
						<StyledParagraph id={'phone'} label={"Phone"} text={phone}/>
						<StyledParagraph id={'wallet'} label={"Wallet"} text={`₹${wallet}`}/>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Redirect label={redirectButtonLabel} href={redirectButtonHref} className="text-xl font-semibold" />
      </CardFooter>
    </Card>
  );
}
