import useUser from "../hooks/useUser";
import Spinner from "../components/ui/Spinner";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const { user, isLoading } = useUser();

  return (
    <div className="container mx-auto flex flex-col h-screen p-5">
      <Navbar />
      <span className="my-3" />
      {isLoading ? (
        <div className="flex flex-1 items-center justify-center gap-3">
          <Spinner />
          <p>Loading your data...</p>
        </div>
      ) : (
        <div className="flex flex-col gap-5 flex-1">
          <div>
            <p className="text-2xl font-semibold">
              Hello there, {user?.user_metadata.name}
            </p>
          </div>
          <div className="flex flex-col flex-1 items-center justify-center gap-3 border border-gray-200 dark:border-gray-700 rounded-lg h-[450px]">
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
