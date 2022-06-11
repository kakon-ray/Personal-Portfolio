import Navbar from "../component/Navbar/Navbar";
import Header from "../component/Header/Header";
import Projects from "../component/Projects/Projects";
import Services from "../component/Services.js/Services";
import AboutMe from "../component/AboutMe/AboutMe";
import Contact from "../component/Contact/Contact";
import Skill from "../component/Skill/Skill";
import TechnologySkill from "../component/TechnologySkill";
const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
      <Skill />
      <TechnologySkill />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
