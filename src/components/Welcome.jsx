const Welcome = ({ name }) => {
  return (
    <div className="p-5 bg-gray-100 space-y-1 dark:bg-black/20 flex flex-col gap-5 items-center sm:justify-between sm:flex-row rounded-lg">
      <div className="text-center sm:text-left">
        <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-700 to-red-300 bg-clip-text text-transparent">
          Welcome, {name}!
        </p>
        <p className="text-gray-500 dark:text-gray-300 mt-1">
          Let&apos;s track your habits together and make progress towards your
          aspirations
        </p>
      </div>
      <button className="rounded-full bg-gradient-to-r from-blue-700 to-purple-500 text-white py-2 px-4 md:w-48 transition-colors delay-100 ease-linear">
        Track new habit
      </button>
    </div>
  );
};

export default Welcome;
