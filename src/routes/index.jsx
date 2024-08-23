import React from "react";
import ExplorePages from "../pages/client_workflow/index";
import PostProject from "../pages/PostProject";
import WhyBrand from "../pages/WhyBrand";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/homepage/Home";
import Login from "../pages/Login"
import Signup from "../pages/Signup";
import WelcomUser from "../pages/WelcomeUser";
import EmailVarfy from "../pages/EmailVarify";
import Profile from "../pages/Profile";
import Dashboard from "../pages/dashboard/Dashboard_component";
import { Routes, Route } from "react-router-dom";
import ProjectSelection from "../pages/client_workflow/ProjectSelection";
import ProjectCategoriesOptions from "../pages/client_workflow/projectCategoriesOptions";
import Package_box from "../pages/client_workflow/package_show";

function Routes_page() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<WelcomUser />} />
        <Route path="/explorepage" element={<ExplorePages />}></Route>
        <Route path="/explorepage/subcategories" element={<ProjectCategoriesOptions />} />
        <Route path="/explorepage/package_show" element={<Package_box />} />
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

export default Routes_page;
