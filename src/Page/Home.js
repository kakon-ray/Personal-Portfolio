import Navbar from "../component/Navbar/Navbar";
import Header from "../component/Header/Header";
import Skill from "../component/Skill";
import Projects from "../component/Projects/Projects";
import Services from "../component/Services.js/Services";
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header />
      <Services />
      <Skill />
      <Projects />
    </>
  );
};

export default Home;
