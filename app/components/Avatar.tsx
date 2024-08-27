"use client";

import { User } from "@prisma/client";
import Image from "next/image";
import placeholder from "@/public/placeholder.jpg";
import useActiveList from "../hooks/useActiveList";
interface AvatarProps {
  user: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;
  return (
    <div className="relative">
      <div
        className="
                relative
                inline-block
                rounded-full
                overflow-hidden
                h-8
                w-8
                md:h-9
                md:w-9"
      >
        <Image alt="Avatar" src={user?.image || placeholder} fill />
      </div>
      {isActive && (
        <span
          className="
            absolute
            block
            rounded-full
            bg-green-500
            ring-2
            top-0
            ring-white
            right-0
            h-2
            w-2"
        ></span>
      )}
    </div>
  );
};

export default Avatar;
