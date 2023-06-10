import { Routes, Route } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import PrivateRoute from "./HOC/PrivateRoute";
import AuthRedirect from "./HOC/AuthRedirect";

function App() {
  return (
    <div className="w-full dark:bg-black/90 dark:text-white transition-colors delay-100 ease-linear">
      <Routes>
        <Route element={<AuthRedirect />}>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Authentication />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
