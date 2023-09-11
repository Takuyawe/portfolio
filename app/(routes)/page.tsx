import NavBar from "../_components/NavBar";
import Profile from "../_components/Profile";
import About from "../_components/About";
import Projects from "../_components/Projects";
import Contact from "../_components/Contact";

const Home = () => {
  return (
    <>
      <div>
        <NavBar />
        <Profile />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
