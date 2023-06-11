import { eachDayOfInterval, differenceInCalendarWeeks } from "date-fns";

/**
 * * This component is just a POC as of now.
 * * I'll come back to this later when core features are done.
 */

const Heatmap = () => {
  const daysLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // eslint-disable-next-line no-unused-vars
  const monthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = eachDayOfInterval({
    start: new Date(2024, 0, 1),
    end: new Date(2024, 11, 31),
  }).map((entry) => {
    return {
      date: entry,
      count: Math.floor(Math.random() * 10) + 1,
    };
  });

  const weeks = Array.from({
    length:
      Math.abs(
        differenceInCalendarWeeks(new Date(2023, 0, 1), new Date(2023, 11, 31))
      ) + 1,
  });

  const getColor = (count) => {
    if (count >= 1 && count <= 3) {
      return "#DDFFBB";
    } else if (count >= 4 && count <= 6) {
      return "#A4D0A4";
    } else if (count >= 7 && count <= 10) {
      return "#41644A";
    } else {
      return "#E3F2C1";
    }
  };

  return (
    <svg className="w-full">
      {daysLabels.map((day, idx) => (
        <text
          key={day}
          x={0}
          y={13}
          dy={idx * 20}
          className="fill-black dark:fill-white"
        >
          {idx % 2 !== 0 ? day : null}
        </text>
      ))}
      <g transform={`translate(50, 0)`}>
        {weeks.map((_, idx) => {
          return (
            <g key={idx} transform={`translate(${idx * 20}, 0)`}>
              {daysLabels.map((_, didx) => {
                const dayIndex = didx;
                const index = idx * 7 + dayIndex;

                return (
                  data[index] && (
                    <rect
                      key={index}
                      width={15}
                      height={15}
                      x={0}
                      y={dayIndex * 20}
                      fill={getColor(data[index].count)}
                      className="cursor-pointer"
                      onClick={() => alert(data[index].date)}
                    >
                      {index}
                    </rect>
                  )
                );
              })}
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export default Heatmap;
