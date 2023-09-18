"use client";

import { appWithTranslation } from "next-i18next";
import NavBar from "@/app/_components/NavBar";
import Profile from "@/app/_components/Profile";
import About from "@/app/_components/About";
import Projects from "@/app/_components/Projects";
import Contact from "@/app/_components/Contact";
import Bottom from "@/app/_components/Bottom";

const Home = () => {
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

export default appWithTranslation(Home);
