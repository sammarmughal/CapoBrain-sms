import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
function App() {
  return (
    <>
      <Router>
        <Navbar />
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
          <Route path="/demo" element={<Demo/>} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
