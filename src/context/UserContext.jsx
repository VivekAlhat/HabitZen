import { createContext, useState, useEffect } from "react";
import { supabase } from "../supabase/client";
import useToast from "../hooks/useToast";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const toast = useToast();

  const [user, setUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    fetchActiveSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user);
        setIsUserLoading(false);

        if (event === "SIGNED_OUT") {
          toast.success("Success", "You have successfully signed out");
        }
      }
    );

    return () => listener?.subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchActiveSession = async () => {
    const activeSession = await supabase.auth.getSession();
    if (activeSession.data.session) {
      setUser(activeSession.data.session.user);
      setIsUserLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, isUserLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
