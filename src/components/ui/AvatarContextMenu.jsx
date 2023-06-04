import { FiSettings, FiLogOut, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import AvatarContextMenuItem from "../AvatarContextMenuItem";

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
        className="flex flex-col gap-2 bg-white min-w-[250px] mr-2 border rounded-lg dark:bg-black dark:text-white dark:border-black shadow-xl"
        sideOffset={5}
        asChild
      >
        <motion.div
          initial={{ opacity: 0, y: "50%" }}
          animate={{ opacity: 1, y: "0" }}
        >
          <DropdownMenu.Item className="hover:outline-none p-3">
            <AvatarContextMenuItem text={username}>
              <FiUser />
            </AvatarContextMenuItem>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="hover:outline-none p-3 hover:bg-black/90 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">
            <AvatarContextMenuItem text={"Settings"}>
              <FiSettings />
            </AvatarContextMenuItem>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="hover:outline-none p-3 hover:bg-black/90 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
            onClick={handleSignOut}
          >
            <AvatarContextMenuItem text={"Sign Out"}>
              <FiLogOut />
            </AvatarContextMenuItem>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="fill-gray-800 dark:fill-white" />
        </motion.div>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
};

export default AvatarContextMenu;
