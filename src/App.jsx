import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/_page";
import Login from "./pages/login/_page";
import Signup from "./pages/signup/_page";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Connections from "./pages/connections/Connections";
import Communities from "./pages/communities/communities";
import ViewCommunities from "./pages/communities/ViewCommunities";
import MarketPlace from "./pages/marketplace/MarketPlace";
import MarketCategory from "./pages/marketplace/MarketCategory";
import MarketAdDetails from "./pages/marketplace/MarketAdDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/view-communities" element={<ViewCommunities />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/market-ad-details" element={<MarketAdDetails />} />
          <Route path="/market-category" element={<MarketCategory />} />
          <Route path="/events" element={<p>events</p>} />
          <Route path="/resource-center" element={<p>Resource Center</p>} />
          <Route
            path="/business-directory"
            element={<p>Business directory</p>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
