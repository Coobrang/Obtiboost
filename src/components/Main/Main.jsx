import React from "react";
import Hero from "./Hero/Hero";
import Customers from "./Customers/Customers";
import Services from "./Services/Services";
import AboutUs from "./AboutUs/AboutUs";
import Projects from "./Projects/Projects";
import Team from "./Team/Team";

const Main = () => {
  return (
    <main className="main">
      <Hero />
      <Customers />
      <Services />
      <AboutUs />
      <Projects />
      <Team />
    </main>
  );
};

export default Main;
