import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import AvatarContextMenu from "../components/ui/AvatarContextMenu";
import ThemeToggle from "../components/ThemeToggle";
import Avatar from "../components/ui/Avatar";
import useUser from "../hooks/useUser";

import { getUserNameFromEmail } from "../lib/functions";

const Navbar = () => {
  const { user } = useUser();
  const username =
    user?.user_metadata.name || getUserNameFromEmail(user?.email);

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/assets/habits.png" alt="HabitZen Logo" className="h-8 w-8" />
        <h1 className="font-bold text-2xl tracking-wide">HabitZen</h1>
      </div>
      <div className="flex items-center gap-5">
        <ThemeToggle />
        <DropdownPrimitive.Trigger className="outline-none">
          <Avatar avatar={user?.user_metadata.avatar_url} />
        </DropdownPrimitive.Trigger>
        <AvatarContextMenu username={username} />
      </div>
    </nav>
  );
};

export default Navbar;
