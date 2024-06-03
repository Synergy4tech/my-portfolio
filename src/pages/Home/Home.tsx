import NavBar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;
