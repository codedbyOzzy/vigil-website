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

export default function App() {
  return (
    <div className="min-h-screen bg-surface-void">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <IntelligenceStonesSection />
        <ArchitectureSection />
        <VigilModulesSection />
        <IntegrationSection />
        <RelationshipSection />
        <FridaySection />
        <RoadmapSection />
        <VisionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
