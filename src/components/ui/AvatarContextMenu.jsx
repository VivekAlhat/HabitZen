import { FiSettings, FiLogOut, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import AvatarContextMenuItem from "../AvatarContextMenuItem";
import { AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="flex flex-col gap-3 bg-white min-w-[230px] mr-2 border rounded-lg dark:bg-black dark:text-white dark:border-black shadow-xl"
          sideOffset={5}
          asChild
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={"avatar-context-menu"}
          >
            <DropdownMenu.Item className="hover:outline-none mt-2 py-2 px-3">
              <AvatarContextMenuItem text={username}>
                <FiUser />
              </AvatarContextMenuItem>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="border-b border-gray-200 dark:border-gray-700" />
            <DropdownMenu.Item className="hover:outline-none py-2 px-3 hover:bg-black/90 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">
              <AvatarContextMenuItem text={"Settings"}>
                <FiSettings />
              </AvatarContextMenuItem>
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="hover:outline-none py-2 px-3 hover:bg-black/90 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
              onClick={handleSignOut}
            >
              <AvatarContextMenuItem text={"Sign Out"}>
                <FiLogOut />
              </AvatarContextMenuItem>
            </DropdownMenu.Item>
            <DropdownMenu.Arrow />
          </motion.div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </AnimatePresence>
  );
};

export default AvatarContextMenu;
