import { Avatar, AvatarImage } from "@/components/ui/avatar";

import ActiveStatus from "./ActiveStatus";

export const title = "Avatar with Online Indicator";

const ProfileAvatar = () => (
  <div className="relative w-fit">
    <Avatar>
      <AvatarImage alt="@rupeshjagtap" src="/Logo.png" />
    </Avatar>
    <ActiveStatus />
  </div>
);

export default ProfileAvatar;
