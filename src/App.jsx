import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Hebergements from "./pages/Hebergements";
import Favoris from "./pages/Favoris";
import HebergementDetail from "./pages/HebergementDetail";
import Footer from "./components/layout/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/hebergements" element={<Hebergements />} />
            <Route path="/hebergements/:id" element={<HebergementDetail />} />
            <Route path="/favoris" element={<Favoris />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
<Route path="/forgot-password" element={<ForgotPassword />} />
<Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
