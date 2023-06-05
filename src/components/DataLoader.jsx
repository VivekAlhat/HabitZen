import Spinner from "./ui/Spinner";

const DataLoader = ({ loadingText }) => {
  return (
    <div className="flex flex-1 items-center justify-center gap-3">
      <Spinner />
      <p>{loadingText}</p>
    </div>
  );
};

export default DataLoader;
