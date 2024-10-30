import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/_page";
import Login from "./pages/login/_page";
import Signup from "./pages/signup/_page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
