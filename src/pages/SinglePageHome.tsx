import React from "react";
import HeroSection from "../components/HeroSection";
import SectionDivider from "../components/SectionDivider";
import AchievementsShowcase from "../components/AchievementsShowcase";
import SkillOrbitVisualization from "../components/SkillOrbitVisualization";
import FeaturedProjectsSpotlight from "../components/FeaturedProjectsSpotlight";
import CTASection from "../components/CTASection";
import AboutSection from "../components/AboutSection";
import UniqueValueProposition from "../components/UniqueValueProposition";
import JourneyTimeline from "../components/JourneyTimeline";
import UniqueEdge from "../components/UniqueEdge";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import CertificationsSection from "../components/CertificationsSection";
import PublicationsPatentSection from "../components/publicationpatent";
import ContactSection from "../components/ContactSection";
import SectionAnchor from "../components/SectionAnchor";

const SinglePageHome = () => {
  return (
    <>
      <SectionAnchor id="home">
        <HeroSection />
      </SectionAnchor>
      
      <SectionDivider />
      
      <SectionAnchor id="about">
        <AboutSection />
      </SectionAnchor>
      
      <SectionDivider />
      
      <SectionAnchor id="journey">
        <UniqueValueProposition />
        <SectionDivider />
        <JourneyTimeline />
        <SectionDivider />
        <UniqueEdge />
      </SectionAnchor>
      
      <SectionDivider />
      
      <SectionAnchor id="achievements">
        <AchievementsShowcase />
      </SectionAnchor>
      
      <SectionDivider />
      
      <SectionAnchor id="experience">
        <ExperienceSection />
      </SectionAnchor>
      
      <SectionDivider />
      
      <SectionAnchor id="skills">
        <SkillOrbitVisualization />
      </SectionAnchor>
      
      <SectionDivider />
      
      <SectionAnchor id="projects">
        <FeaturedProjectsSpotlight />
        <SectionDivider />
        <ProjectsSection />
      </SectionAnchor>
      
      <SectionDivider />
      
      <SectionAnchor id="certifications">
        <CertificationsSection />
      </SectionAnchor>
      
      <SectionDivider />
      
      <SectionAnchor id="publications">
        <PublicationsPatentSection />
      </SectionAnchor>
      
      <SectionDivider />
      
      <SectionAnchor id="contact">
        <ContactSection />
      </SectionAnchor>
      
      <SectionDivider />
      
      <CTASection />
    </>
  );
};

export default SinglePageHome;
