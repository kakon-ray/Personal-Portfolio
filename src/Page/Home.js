import Navbar from "../component/Navbar/Navbar";
import Header from "../component/Header/Header";
import Projects from "../component/Projects/Projects";
import Services from "../component/Services.js/Services";
import AboutMe from "../component/AboutMe/AboutMe";
import Contact from "../component/Contact/Contact";
import Skill from "../component/Skill/Skill";
const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Services />
      <Skill />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
