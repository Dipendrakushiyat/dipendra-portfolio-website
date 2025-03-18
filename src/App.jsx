// import components
import Profile from "./components/Profile";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Profile />
      <Skills />
      <Service />
      <Projects />
      <Experiences />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Dipendra Kushiyat</h6>
        <p>Dipendra Kushiyat © All CopyRights Reserved 2024</p>
      </footer>
    </div>
  );
};

export default App;
