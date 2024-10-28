import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/_page";
import Login from "./pages/login/_page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
