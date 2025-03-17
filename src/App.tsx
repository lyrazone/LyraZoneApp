import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Careers";
import Team from "./pages/Team";
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Git from "./pages/Git";
import LatestNews from "./pages/LatestNews";
import SignIn from "./authentication/SignIn";
import SignUp from "./authentication/SignUp";
import ForgotPassword from "./authentication/ForgotPassword";
import ResetPassword from "./authentication/ResetPassword";
// import LoginModal from "./pages/LoginModal";
import AdminLogin from "./admin/pages/AdminLogin";
import Profile from "./admin/pages/Profile";
import AdminHeader from "./admin/components/AdminHeader";

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  console.log(location);
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isAuthRoute =
    ["/signin", "/signup", "/forgot-password"].some((path) =>
      location.pathname.startsWith(path)
    ) || location.pathname.startsWith("/reset-password");
  return (
    <>
      {!isAdminRoute && !isAuthRoute && <Header />}
      {isAdminRoute && <AdminHeader />}
      {children}
      {!isAdminRoute && !isAuthRoute && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/team" element={<Team />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/git" element={<Git />} />
          <Route path="/latestnews" element={<LatestNews />} />

          <Route path="/adminprofile" element={<Profile />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
      </LayoutWrapper>
      {/* <Header /> */}
      {/* <Footer /> */}

      {/* <AdminHeader /> */}
    </Router>
  );
};

export default App;
