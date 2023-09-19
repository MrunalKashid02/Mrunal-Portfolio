import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Tech from "./pages/TechStack/Tech";
import WorkExp from "./pages/workExperience/WorkExp"


function App() {
  return (
    <>
      <Layout/>
      <div className="container">
        <About />
        <Education />
        <Tech/>
        <Projects/>
        <WorkExp />
        <Contact />
        
        
      </div>
      
      
      
    </>
  );
}

export default App;
