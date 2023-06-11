import moment from "moment";

import { BsArrowRight } from "react-icons/bs";

const HabitCard = ({ habit }) => {
  /**
   * TODO: Destructure ID for redirecting to details page
   */
  const { created_at, name } = habit;

  return (
    <div className="p-5 border border-gray-300 dark:border-none dark:bg-black/10 rounded-lg space-y-3">
      <h3 className="text-xl font-semibold">{name}</h3>
      <div className="flex justify-between items-center">
        <p>
          Tracking since :&nbsp;
          {moment(created_at).format("Do MMMM YYYY")}
        </p>
        <button className="text-white bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-semibold transition-colors delay-100 ease-linear flex items-center gap-3">
          View Details
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HabitCard;
