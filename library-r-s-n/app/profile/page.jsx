import ProfileWrapper from "@/components/profile/ProfileWrapper";
import Image from "next/image";
import {  CgProfile } from 'react-icons/cg'

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <Image></Image> */}
      <ProfileWrapper headerTitle={"This is your profile"} headerLabel={"Vishy"}>
        <CgProfile className="size-10"/>
      </ProfileWrapper>
    </div>
  );
}
