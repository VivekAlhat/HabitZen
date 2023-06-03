import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FiSettings, FiLogOut, FiUser } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/client";
import AvatarContextMenuItem from "./AvatarContextMenuItem";

const AvatarContextMenu = ({ username }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert("Some error occured while signing out");
      return;
    }
    navigate("/");
  };

  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        className="flex flex-col gap-2 bg-white min-w-[250px] mr-4 border border-gray-400 rounded-lg dark:bg-gray-700 dark:text-white"
        sideOffset={5}
      >
        <DropdownMenu.Item className="hover:outline-none p-2">
          <AvatarContextMenuItem text={username}>
            <FiUser />
          </AvatarContextMenuItem>
        </DropdownMenu.Item>
        <DropdownMenu.Separator className="h-[1px] bg-gray-400" />
        <DropdownMenu.Item className="hover:outline-none p-2 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-500 dark:hover:text-white cursor-pointer">
          <AvatarContextMenuItem text={"Settings"}>
            <FiSettings />
          </AvatarContextMenuItem>
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="hover:outline-none p-2 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-500 dark:hover:text-white cursor-pointer"
          onClick={handleSignOut}
        >
          <AvatarContextMenuItem text={"Sign Out"}>
            <FiLogOut />
          </AvatarContextMenuItem>
        </DropdownMenu.Item>
        <DropdownMenu.Arrow className="fill-gray-800 dark:fill-white" />
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
};

export default AvatarContextMenu;
