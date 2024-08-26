import React from "react";
import About from "../components/about/About";
import Qualification from "../components/qualification/Qualification";
import SkillsCard from "../components/skills/Skills";
import ContactCard from "../components/contact/Contact";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <SkillsCard />
      <Qualification />
      <Projects/>
      <ContactCard />
    </>
  );
};

export default Home;
