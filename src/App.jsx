import { Routes, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/_page";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/connections" element={<p>connections</p>} />
          <Route path="/communites" element={<p>communites</p>} />
          <Route path="/marketplace" element={<p>marketplace</p>} />
          <Route path="/events" element={<p>events</p>} />
          <Route path="/resource-center" element={<p>Resource Center</p>} />
          <Route path="/business-directory" element={<p>Business directory</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
