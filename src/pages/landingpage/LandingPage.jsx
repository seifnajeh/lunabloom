import React from "react";
import AboutUs from "../../components/appComponents/About";
import Cta from "../../components/appComponents/FinalCTA";
import HeroSection from "../../components/appComponents/HeroSection";
import Services from "../../components/appComponents/Services";
import Navbar from "../../components/layout/Navbar";

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: "#0F123D" }}>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Cta />
    </div>
  );
};

export default LandingPage;
