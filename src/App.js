import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route, useLocation 
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/noto-sans/400.css";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Help from "./Pages/Help";
import Blog from "./Pages/Blog";
import FAQs from "./Pages/Faq";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import RequestDemo from "./Pages/RequestDemo";
import UserManual from "./Pages/Usermanual";
import FeaturePage from "./Pages/FeaturePage";
import UserManualData from "./Pages/UsermanualData";
import Demo from "./Pages/Demo";
import ScrollToTop from "./Components/scrollToTop";
import AdminPortal from "./Pages/admin-portal";
import AddBlog from "./Pages/admin-portal/add-blog";
import Blogs from "./Pages/admin-portal/blog";
import Category from "./Pages/admin-portal/category";
import DemoUsers from "./Pages/admin-portal/manage_users";
import ChangePassword from "./Pages/admin-portal/settings";
import Tickets from "./Pages/admin-portal/tickets";
import NotFound from "./Pages/NotFound.js";
import UserProfile from "./Pages/user-profile"
import GeneratedTickets from "./Pages/user-profile/generatedTickets.js";
import CloseStatusTickets from "./Pages/user-profile/CloseStatusTickets.js";
import OpenStatusTickets from "./Pages/user-profile/openStatusTickets.js";
function App() {

  return (
    <>
      <Router>
      <AppWithRoutes />
    </Router>     
    </>
  );
}
function AppWithRoutes() {
  const location = useLocation(); 
  const isAdminPanel = location.pathname.startsWith("/adminpanel");
  const isUserProfile = location.pathname.startsWith("/userprofile"); 
  return (
    <>
      {!isAdminPanel && !isUserProfile &&  <Navbar />}      
      <ScrollToTop />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/features/:slug" element={<FeaturePage />} />
        <Route path="/help" element={<Help />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userlogin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/requestdemo" element={<RequestDemo />} />
        <Route path="/usermanual" element={<UserManual />} />
        <Route path="/usermanual/:id" element={<UserManualData />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/adminpanel" element={<AdminPortal />} />
        <Route path="/adminpanel/addblog" element={<AddBlog />} />
        <Route path="/adminpanel/blogs" element={<Blogs />} />
        <Route path="/adminpanel/categories" element={<Category />} />
        <Route path="/adminpanel/demousers" element={<DemoUsers />} />
        <Route path="/adminpanel/changepassword" element={<ChangePassword />} />
        <Route path="/adminpanel/tickets" element={<Tickets />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/userprofile/generated-tickets" element={<GeneratedTickets />} />
        <Route path="/userprofile/openstatus-tickets" element={<OpenStatusTickets />} />
        <Route path="/userprofile/closestatus-tickets" element={<CloseStatusTickets />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAdminPanel && !isUserProfile && <Footer />}
    </>
  );
}

export default App;
