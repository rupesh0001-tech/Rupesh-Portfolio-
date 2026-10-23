import { Avatar, AvatarImage } from "@/components/ui/avatar";

import ActiveStatus from "./ActiveStatus";

export const title = "Avatar with Online Indicator";

const ProfileAvatar = () => (
  <div className="relative w-fit rounded-full ring-4 ring-neutral-50 dark:ring-[#161618]">
    <Avatar>
      <AvatarImage alt="@rupeshjagtap" src="/Logo.png" />
    </Avatar>
    <ActiveStatus />
  </div>
);

export default ProfileAvatar;
