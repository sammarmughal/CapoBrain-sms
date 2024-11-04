import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/noto-sans/400.css";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Help from "./Pages/Help";
import Blog from "./Pages/Blog";
import FAQs from "./Pages/Faq";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/faq" element={<FAQs/>} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
