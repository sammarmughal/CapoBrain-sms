import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router-dom";
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
import ScrollToTop from "./Components/scrollToTop";
import AdminPortal from "./Pages/admin-portal";
import AdminPanel from "./Pages/admin-portal/adminpanel.js";
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

function App() {
  return (
    <>
      <Router>
        <MyProvider>
          <AppWithRoutes />
        </MyProvider>
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
      {!isAdminPanel && !isUserProfile && <Navbar />}
      <WhatsAppChat />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/features/" element={<Features />} />
        <Route path="/features/:slug" element={<FeaturePage />} />
        <Route path="/help/" element={<Help />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/blog/:postSlug" element={<BlogData />} />
        <Route path="/faq/" element={<FAQs />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/userlogin/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/requestdemo/" element={<RequestDemo />} />
        <Route path="/term-and-services" element={<TermsAndServices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/usermanual/" element={<UserManual />} />
        <Route path="/usermanual/:id" element={<UserManualData />} />
        <Route path="/demo" element={<Demo />} />
        {/* <Route path="/adminpanel" element={<AdminPanel />}> */}
          <Route path="/adminpanel" element={<AdminPortal />} />
          <Route path="/adminpanel/addblog" element={<AddBlog />} />
          <Route path="/adminpanel/blogs" element={<Blogs />} />
          <Route path="/adminpanel/categories" element={<Category />} />
          <Route path="/adminpanel/demousers" element={<DemoUsers />} />
          <Route
            path="/adminpanel/changepassword"
            element={<ChangePassword />}
          />
          <Route path="/adminpanel/tickets" element={<Tickets />} />
        {/* </Route> */}
        <Route path="/userprofile" element={<UserProfile />} />
        <Route
          path="/userprofile/generated-tickets"
          element={<GeneratedTickets />}
        />
        <Route
          path="/userprofile/openstatus-tickets"
          element={<OpenStatusTickets />}
        />
        <Route
          path="/userprofile/closestatus-tickets"
          element={<CloseStatusTickets />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {!isAdminPanel && !isUserProfile && <Footer />}
    </>
  );
}

export default App;
