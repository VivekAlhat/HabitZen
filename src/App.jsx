import { Routes, Route } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="w-full dark:bg-black/90 dark:text-white transition-colors delay-100 ease-linear">
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
