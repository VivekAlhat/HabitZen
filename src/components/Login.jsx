import { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { supabase } from "../supabase/client";

import useToast from "../hooks/useToast";
import Spinner from "./ui/Spinner";
import ThemeToggle from "./ui/ThemeToggle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const toast = useToast();

  const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignInWithEmail = async (e) => {
    e.preventDefault();
    if (!email) {
      return;
    }

    setIsSigningIn(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${REDIRECT_URL}/dashboard`,
      },
    });

    if (error) {
      toast.error("Error", error.message);
    } else {
      toast.success("Success", "Please, check your email for the magic link");
    }

    setIsSigningIn(false);
  };

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${REDIRECT_URL}/dashboard`,
      },
    });

    if (error) {
      toast.error("Error", "Some error occured while signing you in");
    }
  };

  return (
    <div className="flex flex-col items-center md:justify-center gap-5 px-6 w-full lg:px-16 xl:px-32">
      <div className="absolute top-5 right-10">
        <ThemeToggle />
      </div>
      <div className="text-center flex flex-col gap-3">
        <div className="flex items-center justify-center gap-2">
          <img
            src="/assets/habits.png"
            alt="HabitZen Logo"
            className="h-12 w-12"
          />
          <h1 className="font-bold text-3xl">HabitZen</h1>
        </div>
        <p className="text-gray-600 text-lg font-semibold md:text-sm lg:text-lg dark:text-white">
          Build Better Habits, One Day at a Time
        </p>
      </div>
      <hr className="w-full" />
      <form className="space-y-5 w-full" onSubmit={handleSignInWithEmail}>
        <input
          className="border border-gray-400 py-2 px-4 w-full rounded-lg text-black"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button
          className="capitalize font-medium w-full bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-white/80 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors duration-500 inline-flex items-center justify-center gap-3"
          type="submit"
        >
          {isSigningIn ? (
            <>
              <Spinner />
              <p>Signing in</p>
            </>
          ) : (
            "Sign in with email"
          )}
        </button>
      </form>
      <div className="relative flex py-5 items-center w-full">
        <div className="flex-grow border-t border-gray-800 dark:border-white"></div>
        <span className="flex-shrink mx-4 capitalize">or continue with</span>
        <div className="flex-grow border-t border-gray-800 dark:border-white"></div>
      </div>
      <button
        type="button"
        className="w-full border border-[#24292F] dark:border-white dark:hover:bg-gray-50 text-black dark:text-white dark:hover:text-black hover:bg-gray-800 hover:text-white transition-colors duration-500 font-medium rounded-lg px-5 py-2.5 inline-flex items-center justify-center gap-2"
        onClick={handleGoogleSignIn}
      >
        <AiOutlineGoogle className="w-6 h-6" />
        Google
      </button>
      <div className="absolute bottom-5 md:right-10">
        <a
          target="_blank"
          href="https://icons8.com/icon/iayrfUTeol0r/habits"
          rel="noreferrer"
          className="underline"
        >
          Habits&nbsp;
        </a>
        icon by&nbsp;
        <a
          target="_blank"
          href="https://icons8.com"
          rel="noreferrer"
          className="underline"
        >
          Icons8
        </a>
      </div>
    </div>
  );
};

export default Login;
