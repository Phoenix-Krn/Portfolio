import HeroSection from "../components/HeroSection";
import SectionDivider from "../components/SectionDivider";
import AchievementsShowcase from "../components/AchievementsShowcase";
import SkillOrbitVisualization from "../components/SkillOrbitVisualization";
import FeaturedProjectsSpotlight from "../components/FeaturedProjectsSpotlight";
import CTASection from "../components/CTASection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SectionDivider />
      <AchievementsShowcase />
      <SectionDivider />
      <FeaturedProjectsSpotlight />
      <SectionDivider />
      <SkillOrbitVisualization />
      <SectionDivider />
      <CTASection />
    </>
  );
};

export default Home;
