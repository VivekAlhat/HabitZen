import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert("Some error occured while signing out");
      return;
    }
    navigate("/");
  };
  return (
    <div>
      Welcome to your dashboard
      <button
        className="py-2 px-5 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-lg"
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </div>
  );
};

export default Dashboard;
