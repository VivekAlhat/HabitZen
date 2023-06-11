import {
  format,
  startOfToday,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isToday,
} from "date-fns";

const daysLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const HabitProgress = () => {
  /**
   * TODO: Display data from database instead of placeholder
   */

  const today = startOfToday();

  const daysInCurrWeek = eachDayOfInterval({
    start: startOfWeek(today),
    end: endOfWeek(today),
  });

  return (
    <div className="py-5">
      <div className="grid grid-cols-3 grid-rows-3 sm:grid-cols-7 sm:grid-rows-none grid-flow-row gap-6 text-center place-items-center">
        {daysInCurrWeek.map((day, idx) => (
          <div
            key={idx}
            className="w-full gap-5 flex flex-col items-center justify-center p-5 md:p-3 relative border border-gray-200 dark:border-white/10 rounded-md"
          >
            <p className="h-2 w-2 bg-emerald-600 rounded-full absolute top-2 right-2"></p>
            <p
              className={`px-3 py-1 w-fit cursor-pointer rounded-full ${
                isToday(day)
                  ? "bg-red-400 text-white hover:bg-red-500"
                  : "hover:bg-sky-500 hover:text-white"
              }`}
            >
              {format(day, "d")}
            </p>
            <p className="text-sm rounded-full bg-violet-400 dark:bg-violet-600 text-white px-3">
              {daysLabels.at(idx)}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p>
          <span className="font-semibold mr-2">Weekly Streak:</span> 5 days
        </p>
      </div>
    </div>
  );
};

export default HabitProgress;
