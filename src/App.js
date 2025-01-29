import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/footer.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/noto-sans/400.css";
import About from "./Pages/about/index.js";
import Features from "./Pages/features/index.js";
import Help from "./Pages/help/index.js";
import Blog from "./Pages/blog/index.js";
import FAQs from "./Pages/faq/index.js";
import Contact from "./Pages/contact/index.js";
import Login from "./Pages/userlogin/Login.js";
import SignUp from "./Pages/Signup";
import RequestDemo from "./Pages/requestdemo/index.js";
import UserManual from "./Pages/usermanual/index.js";
import FeaturePage from "./Pages/features/FeaturePage.js";
import UserManualData from "./Pages/usermanual/UsermanualData.js";
import Demo from "./Pages/Demo";
import ScrollTop from "././Components/scrollTop.js";
import AdminPortal from "./Pages/admin-portal";
import AddBlog from "./Pages/admin-portal/add-blog";
import Blogs from "./Pages/admin-portal/blog";
import Category from "./Pages/admin-portal/category";
import DemoUsers from "./Pages/admin-portal/manage_users";
import ChangePassword from "./Pages/admin-portal/settings";
import Tickets from "./Pages/admin-portal/tickets";
import NotFound from "./Pages/NotFound.js";
import UserProfile from "./Pages/user-profile";
import GeneratedTickets from "./Pages/user-profile/generatedTickets.js";
import CloseStatusTickets from "./Pages/user-profile/CloseStatusTickets.js";
import OpenStatusTickets from "./Pages/user-profile/openStatusTickets.js";
import MyProvider from "./ContextApi/MyProvider";
import BlogData from "./Pages/blog/BlogData.js";
import TermsAndServices from "./Pages/TermAndServices.js";
import PrivacyPolicy from "./Pages/PrivacyPolicy.js";
import WhatsAppChat from "./Components/whatsapp.js";
import ProtectedRoute from "./utils/ProtectedRoute.js";
import Schools from "./Pages/schools/index.js";
function App() {
  return (
    <>
      {" "}
      <HelmetProvider>
        <Router>
          <MyProvider>
            <AppWithRoutes />
          </MyProvider>
        </Router>
      </HelmetProvider>
    </>
  );
}
function AppWithRoutes() {
  const location = useLocation();
  const isAdminPanel = location.pathname.startsWith("/adminpanel");
  const isUserProfile = location.pathname.startsWith("/userprofile");

  return (
    <>
      {!isAdminPanel && !isUserProfile && <Navbar />}
      <WhatsAppChat />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/features/" element={<Features />} />
        <Route path="/features/:slug" element={<FeaturePage />} />
        <Route path="/help/" element={<Help />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/top-schools-in-gujranwala/" element={<Schools />} />
        <Route path="/blog/:postSlug" element={<BlogData />} />
        <Route path="/faq/" element={<FAQs />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/userlogin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/requestdemo" element={<RequestDemo />} />
        <Route path="/term-and-services" element={<TermsAndServices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/usermanual/" element={<UserManual />} />
        <Route path="/usermanual/:id" element={<UserManualData />} />
        <Route path="/demo" element={<Demo />} />
        <Route
          path="/adminpanel"
          element={
            <ProtectedRoute
              allowedEmail="capobrain@gmail.com"
              redirectPath="/userprofile"
            >
              <AdminPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminpanel/addblog"
          element={
            <ProtectedRoute
              allowedEmail="capobrain@gmail.com"
              redirectPath="/userprofile"
            >
              <AddBlog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminpanel/blogs"
          element={
            <ProtectedRoute
              allowedEmail="capobrain@gmail.com"
              redirectPath="/userprofile"
            >
              <Blogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminpanel/changepassword"
          element={
            <ProtectedRoute
              allowedEmail="capobrain@gmail.com"
              redirectPath="/userprofile"
            >
              <ChangePassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminpanel/demousers"
          element={
            <ProtectedRoute
              allowedEmail="capobrain@gmail.com"
              redirectPath="/userprofile"
            >
              <DemoUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminpanel/categories"
          element={
            <ProtectedRoute
              allowedEmail="capobrain@gmail.com"
              redirectPath="/userprofile"
            >
              <Category />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminpanel/tickets"
          element={
            <ProtectedRoute
              allowedEmail="capobrain@gmail.com"
              redirectPath="/userprofile"
            >
              <Tickets />
            </ProtectedRoute>
          }
        />
        {/* </Route> */}
        <Route
          path="/userprofile/*"
          element={
            <ProtectedRoute
              restrictEmail="capobrain@gmail.com" // Restrict admin from accessing user profile
              redirectPath="/adminpanel"
            >
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userprofile/generated-tickets"
          element={
            <ProtectedRoute
              restrictEmail="capobrain@gmail.com"
              redirectPath="/adminpanel"
            >
              <GeneratedTickets />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userprofile/openstatus-tickets"
          element={
            <ProtectedRoute
              restrictEmail="capobrain@gmail.com"
              redirectPath="/adminpanel"
            >
              <OpenStatusTickets />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userprofile/closestatus-tickets"
          element={
            <ProtectedRoute
              restrictEmail="capobrain@gmail.com"
              redirectPath="/adminpanel"
            >
              <CloseStatusTickets />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {!isAdminPanel && !isUserProfile && <Footer />}
    </>
  );
}

export default App;
