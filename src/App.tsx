import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import SinglePageHome from "./pages/SinglePageHome";
import { usePortfolioMode } from "./context/PortfolioContext";

function AppContent() {
  const { isMultiPage } = usePortfolioMode();

  if (!isMultiPage) {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SinglePageHome />} />
          <Route path="*" element={<SinglePageHome />} />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="publications" element={<Publications />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;