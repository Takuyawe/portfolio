"use client"

import NavBar from "../_components/NavBar";
import Profile from "../_components/Profile";
import About from "../_components/About";
import Projects from "../_components/Projects";
import Contact from "../_components/Contact";
import Bottom from "../_components/Bottom";

import {useEffect} from "react"

const Home = () => {
  // useEffect(() => {
  //   const element = document.getElementById("profile");
    
  //   if(element !== null) {
  //     element.scrollIntoView({behavior: "smooth"});
  //   }
  // }, [])

  return (
    <>
      <div>
        <NavBar />
        <div id="profile">
          <Profile />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Bottom />
      </div>
    </>
  );
};

export default Home;
