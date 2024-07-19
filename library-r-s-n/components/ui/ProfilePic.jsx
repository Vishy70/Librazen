import Image from "next/image";
import { CgProfile } from "react-icons/cg";


export function ProfilePic({ profile_picture, size })
{
    const profile_url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/profile_picture/${profile_picture}`;
    return (
        profile_picture ? (
            <div
              className={`mt-2 mr-5 max-w-xs rounded-full flex items-center justify-center`}
            >
              <Image
                src={profile_url}
                width={size}
                height={size}
                className="rounded-full  duration-100 ease-in-out transform hover:scale-105 hover:border-4 hover:border-violet-400"
              />
            </div>
          ) : (
            <CgProfile className="size-20 rounded-full hover:border-2 hover:bg-violet-300" />
          )
    )
}