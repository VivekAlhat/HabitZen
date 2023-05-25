import Login from "../components/Login";

const Authentication = () => {
  return (
    <div className="w-full h-screen grid grid-cols-1 sm:grid-cols-2">
      <img
        src={
          "https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        }
        alt={"Landing Image"}
        className="w-full h-screen object-cover hidden sm:block"
      />
      <Login />
    </div>
  );
};

export default Authentication;
