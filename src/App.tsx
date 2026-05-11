import { HashRouter, Routes, Route } from 'react-router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import IntelligenceStonesSection from './sections/IntelligenceStonesSection';
import ArchitectureSection from './sections/ArchitectureSection';
import VigilModulesSection from './sections/VigilModulesSection';
import IntegrationSection from './sections/IntegrationSection';
import RelationshipSection from './sections/RelationshipSection';
import FridaySection from './sections/FridaySection';
import RoadmapSection from './sections/RoadmapSection';
import VisionSection from './sections/VisionSection';
import CTASection from './sections/CTASection';
import ComparisonSection from './sections/ComparisonSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <IntelligenceStonesSection />
      <ArchitectureSection />
      <VigilModulesSection />
      <IntegrationSection />
      <RelationshipSection />
      <ComparisonSection />
      <FridaySection />
      <RoadmapSection />
      <VisionSection />
      <CTASection />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-surface-void">
        <Routes>
          <Route path="/" element={
            <>
              <Navigation />
              <main><HomePage /></main>
              <Footer />
            </>
          } />

          {/* Docs Route (No shared nav/footer for full-screen doc feel) */}
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
