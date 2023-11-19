import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Tasks from "./pages/Tasks";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
