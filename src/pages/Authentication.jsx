import Login from "../components/Login";

const Authentication = () => {
  return (
    <div className="w-full h-screen grid grid-cols-1 sm:grid-cols-2">
      <img
        src={"/assets/plants.jpg"}
        alt={"Landing Image"}
        className="w-full h-screen object-cover hidden sm:block"
      />
      <Login />
    </div>
  );
};

export default Authentication;
