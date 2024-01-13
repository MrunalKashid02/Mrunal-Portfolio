import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Tech from "./pages/TechStack/Tech";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/themeContext";
import MobileNav from "./components/MobileNav/MobileNav";
//import WorkExp from "./pages/workExperience/WorkExp"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  const [theme]=useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav/>
        <Layout/>
        <div className="container">
          <About />
          <Education />
          <Tech/>
          <Projects/>
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <h4 className="text-center">
            Made With 😍 By Mrunal Kashid &copy; 2023
          </h4>
        </div>
      </div>
      <ScrollToTop 
        smooth 
        color="#f29f67"
        style={{backgroundColor:'#1e1e2c',borderRadius:'80px'}} 
      />
      
      
      
    </>
  );
}

export default App;
