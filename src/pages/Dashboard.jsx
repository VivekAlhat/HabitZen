import useUser from "../hooks/useUser";
import useToast from "../hooks/useToast";
import Navbar from "../components/Navbar";
import moment from "moment";

import { supabase } from "../supabase/client";
import { useQuery } from "react-query";
import { useState } from "react";
import Welcome from "../components/Welcome";
import DataLoader from "../components/DataLoader";

const Dashboard = () => {
  const toast = useToast();
  const { user, isUserLoading } = useUser();

  const [habits, setHabits] = useState([]);

  const fetchUserHabits = async () => {
    const { data, error } = await supabase.from("habits").select("*");
    if (error) {
      throw new Error(error.message);
    }
    return data;
  };

  const { isLoading: isFetchingHabits } = useQuery(
    "habits",
    () => fetchUserHabits(),
    {
      retry: 1,
      refetchOnWindowFocus: false,
      onSuccess: (data) => setHabits(data),
      onError: (error) => {
        toast.error("Error", error.message);
      },
    }
  );

  return (
    <div className="container mx-auto flex flex-col h-screen p-5">
      <Navbar />
      <span className="my-3" />
      {isUserLoading ? (
        <DataLoader loadingText={"Loading your profile..."} />
      ) : (
        <div className="flex flex-col gap-5 flex-1">
          <Welcome name={user?.user_metadata.name} />
          <hr className="dark:border dark:border-black/30" />
          <>
            {isFetchingHabits ? (
              <DataLoader loadingText={"Gathering your habit data..."} />
            ) : habits?.length > 0 ? (
              <div className="flex flex-col gap-3">
                {habits.map((habit) => {
                  const { id, created_at, name } = habit;
                  return (
                    <div
                      key={id}
                      className="p-5 border border-gray-100 dark:border-none dark:bg-black/20 rounded-lg space-y-3"
                    >
                      <h3 className="text-lg">{name}</h3>
                      <p>
                        Tracking since :&nbsp;
                        {moment(created_at).format("Do MMMM YYYY")}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col flex-1 items-center justify-center gap-3 border border-gray-200 dark:border-none rounded-lg h-[450px] dark:bg-black/20">
                <p className="text-center">
                  Not tracking any habits yet? <br />
                  Click below to start your first habit
                </p>
                <button className="border border-slate-600 px-5 py-2 rounded-full cursor-pointer hover:bg-slate-700 hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white transition-colors ease-linear delay-100">
                  Begin Tracking
                </button>
              </div>
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
