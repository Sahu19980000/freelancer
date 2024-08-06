import React from "react";
import ExplorePages from "./pages/client_workflow/index";
import PostProject from "./pages/PostProject";
import WhyBrand from "./pages/WhyBrand";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import WelcomUser from "./pages/WelcomeUser";
import EmailVarfy from "./pages/EmailVarify";
import Profile from "./pages/Profile";
import Dashboard from "./pages/dashboard/Dashboard_component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<WelcomUser />} />
        <Route path="/explorepage" element={<ExplorePages />} />
        <Route path="/postproject" element={<PostProject />} />
        <Route path="/whybrand" element={<WhyBrand />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/EmailVarfy" element={<EmailVarfy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
