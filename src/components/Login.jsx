import { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { supabase } from "../supabase/client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignInWithEmail = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        return;
      }
      setIsSigningIn(true);
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: "http://localhost:5173/dashboard",
        },
      });

      if (error) {
        alert("An error occured");
      } else {
        alert("Please check your email for magic link");
      }
    } catch (error) {
      alert("An error occured");
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:5173/dashboard",
        },
      });
      if (error) {
        alert(`An error occured: ${error}`);
      }
    } catch (error) {
      alert(`An error occured: ${error}`);
    }
  };

  return (
    <div className="h-screen w-full grid place-items-center">
      <div className="flex flex-col items-center justify-center gap-5 p-8 sm:w-[500px] md:w-fit">
        <div className="text-center flex flex-col gap-3">
          <h1 className="font-bold text-3xl">HabitZen</h1>
          <p className="text-gray-600 font-semibold">
            Enter your email to sign in with magic link
          </p>
        </div>
        <hr className="w-full" />
        <form className="space-y-5" onSubmit={handleSignInWithEmail}>
          <input
            className="border border-gray-400 py-2 px-4 w-full rounded-lg"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button
            className="capitalize font-medium w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
            type="submit"
          >
            {isSigningIn ? "Signing in ..." : "Sign in with email"}
          </button>
        </form>
        <div className="relative flex py-5 items-center w-full">
          <div className="flex-grow border-t border-gray-800"></div>
          <span className="flex-shrink mx-4 capitalize">or continue with</span>
          <div className="flex-grow border-t border-gray-800"></div>
        </div>
        <button
          type="button"
          className="w-full border border-[#24292F] hover:bg-gray-800 hover:text-white font-medium rounded-lg px-5 py-2.5 inline-flex items-center justify-center gap-2"
          onClick={handleGoogleSignIn}
        >
          <AiOutlineGoogle className="w-6 h-6" />
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
