import useUser from "../hooks/useUser";
import Avatar from "../components/ui/Avatar";
import Spinner from "../components/ui/Spinner";

import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import AvatarContextMenu from "../components/ui/AvatarContextMenu";
import ThemeToggle from "../components/ui/ThemeToggle";

const Dashboard = () => {
  const { user, isLoading } = useUser();

  return (
    <div className="container mx-auto flex flex-col h-screen p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/assets/habits.png"
            alt="HabitZen Logo"
            className="h-8 w-8"
          />
          <h1 className="font-bold text-2xl tracking-wide">HabitZen</h1>
        </div>
        <div className="flex items-center gap-5">
          <ThemeToggle />
          <DropdownPrimitive.Trigger className="outline-none">
            <Avatar avatar={user?.user_metadata.avatar_url} fallback={"HZ"} />
          </DropdownPrimitive.Trigger>
          <AvatarContextMenu username={user?.user_metadata.name} />
        </div>
      </div>
      <hr className="my-5 border border-gray-200" />
      {isLoading ? (
        <div className="flex flex-1 items-center justify-center gap-3">
          <Spinner />
          <p>Loading your data...</p>
        </div>
      ) : (
        <div className="flex flex-col gap-5 flex-1">
          <div className="text-center sm:text-left">
            <p className="text-2xl font-semibold">
              Hello there, {user?.user_metadata.name}
            </p>
          </div>
          <div className="flex flex-col flex-1 items-center justify-center gap-3 border border-gray-200 rounded-lg h-[450px]">
            <p className="text-center">
              Not tracking any habits yet? <br />
              Click below to start your first habit
            </p>
            <button className="border border-slate-600 px-5 py-2 rounded-full cursor-pointer hover:bg-slate-700 hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white transition-colors ease-linear delay-100">
              Begin Tracking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
