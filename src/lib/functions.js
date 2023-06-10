import { eachDayOfInterval } from "date-fns";
import moment from "moment";

const daysOfYear = eachDayOfInterval({
  start: new Date(2023, 0, 1),
  end: new Date(2023, 11, 31),
}).map((entry) => {
  return { date: moment(entry).format("yyyy-MM-DD"), count: 6, level: 1 };
});

const getUserNameFromEmail = (email) => {
  if (email) {
    const data = email.split("@");
    return data.at(0);
  }
};

export { daysOfYear, getUserNameFromEmail };
