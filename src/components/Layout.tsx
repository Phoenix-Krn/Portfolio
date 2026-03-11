import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingParticles from "../components/FloatingParticles";
import CustomCursor from "../components/CustomCursor";
import PageTransition from "../components/PageTransition";
import AnimatedBackground from "../components/AnimatedBackground";
import ThemeSwitcher from "../components/ThemeSwitcher";
import ViewModeSwitcher from "../components/ViewModeSwitcher";
import SmoothScrollNavigator from "../components/SmoothScrollNavigator";
import QuickPreviewModal from "../components/QuickPreviewModal";
import CommandPalette from "../components/CommandPalette";
import ScrollToTop from "../components/ScrollToTop";
import EasterEgg from "../components/EasterEgg";
import LoadingScreen from "../components/LoadingScreen";
import FloatingIcons from "../components/FloatingIcons";
import FloatingWords from "../components/FloatingWords";
import MouseTrail from "../components/MouseTrail";
import StarField from "../components/StarField";
import ShootingStars from "../components/ShootingStars";
import GalaxyBackground from "../components/GalaxyBackground";
import FloatingPlanets from "../components/FloatingPlanets";
import CosmicOrbs from "../components/CosmicOrbs";
import ConstellationEffect from "../components/ConstellationEffect";
import AuroraEffect from "../components/AuroraEffect";
import ParticleExplosion from "../components/ParticleExplosion";
import MeteorShower from "../components/MeteorShower";
import ParallaxStars from "../components/ParallaxStars";
import SpaceDebris from "../components/SpaceDebris";
import BlackHole from "../components/BlackHole";
import PageTransitionParticles from "../components/PageTransitionParticles";
import PageTransitionWave from "../components/PageTransitionWave";
import ScrollingPageIndicator from "../components/ScrollingPageIndicator";
import BreadcrumbTrail from "../components/BreadcrumbTrail";
import CursorFollower from "../components/CursorFollower";
import AnimatedBlob from "../components/AnimatedBlob";
import InteractiveGradientBg from "../components/InteractiveGradientBg";

const Layout = () => {
  return (
    <>
      <LoadingScreen />
      <CursorFollower />
      <CommandPalette />
      <AnimatedBlob />
      <InteractiveGradientBg />
      <div className="relative">
        {/* Galaxy Theme Layers (Background) */}
        <GalaxyBackground />
        <BlackHole />
        <StarField />
        <ParallaxStars />
        <ShootingStars />
        <MeteorShower />
        <AuroraEffect />
        <CosmicOrbs />
        <FloatingPlanets />
        <ConstellationEffect />
        <SpaceDebris />
        
        {/* Page Transition Effects */}
        <ScrollingPageIndicator />
        <PageTransitionParticles />
        <PageTransitionWave />
        <BreadcrumbTrail />
        
        {/* Interactive Elements (Foreground) */}
        <CustomCursor />
        <MouseTrail />
        <ParticleExplosion />
        <AnimatedBackground />
        <FloatingParticles />
        <FloatingIcons />
        <FloatingWords />
        
        <Navbar />
        <SmoothScrollNavigator />
        <main className="relative z-10">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
        <ThemeSwitcher />
        <ViewModeSwitcher />
        <QuickPreviewModal />
        <ScrollToTop />
        <EasterEgg />
      </div>
    </>
  );
};

export default Layout;
