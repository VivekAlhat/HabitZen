import { AiOutlineGoogle } from "react-icons/ai";

const Login = () => {
  return (
    <div className="h-screen w-full grid place-items-center">
      <div className="flex flex-col items-center justify-center gap-5 p-8 sm:w-[500px] md:w-fit">
        <div className="text-center flex flex-col gap-3">
          <h1 className="font-bold text-3xl">Create an account</h1>
          <p className="text-gray-600 font-semibold">
            Enter your email below to create an account
          </p>
        </div>
        <hr className="w-full" />
        <input
          className="border border-gray-400 py-2 px-4 w-full rounded-lg"
          type="email"
          placeholder="name@example.com"
        />
        <button className="capitalize font-medium w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg">
          Sign in with email
        </button>
        <div className="relative flex py-5 items-center w-full">
          <div className="flex-grow border-t border-gray-800"></div>
          <span className="flex-shrink mx-4 capitalize">or continue with</span>
          <div className="flex-grow border-t border-gray-800"></div>
        </div>
        <button
          type="button"
          className="w-full border border-[#24292F] hover:bg-gray-800 hover:text-white font-medium rounded-lg px-5 py-2.5 inline-flex items-center justify-center gap-2"
        >
          <AiOutlineGoogle className="w-6 h-6" />
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
