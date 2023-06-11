import HabitProgress from "./HabitProgress";

import { BsArrowRight } from "react-icons/bs";

const HabitCard = ({ habit }) => {
  /**
   * TODO: Destructure ID for redirecting to details page
   */
  const { name } = habit;

  return (
    <div className="p-5 my-2 border border-gray-300 dark:border-none dark:bg-black/10 rounded-lg space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="md:text-xl font-semibold">{name}</h3>
        <button className="text-sm sm:text-md text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-lg font-semibold transition-colors delay-100 ease-linear flex items-center gap-2 sm:gap-3">
          View Details
          <BsArrowRight />
        </button>
      </div>
      <div className="border-t border-gray-200 dark:border-white/10 pt-4">
        <p>Your progress this week</p>
        <HabitProgress />
      </div>
    </div>
  );
};

export default HabitCard;
