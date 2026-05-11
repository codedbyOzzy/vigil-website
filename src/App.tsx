import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import QuickStartModal from './components/QuickStartModal';
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

export default function App() {
  const [isQuickStartOpen, setIsQuickStartOpen] = useState(false);

  const onGetStarted = () => setIsQuickStartOpen(true);

  return (
    <HashRouter>
      <div className="min-h-screen bg-surface-void">
        <Routes>
          <Route path="/" element={
            <>
              <Navigation onGetStarted={onGetStarted} />
              <main>
                <HeroSection onGetStarted={onGetStarted} />
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
                <CTASection onGetStarted={onGetStarted} />
              </main>
              <Footer />
              <QuickStartModal 
                isOpen={isQuickStartOpen} 
                onClose={() => setIsQuickStartOpen(false)} 
              />
            </>
          } />
        </Routes>
      </div>
    </HashRouter>
  );
}
