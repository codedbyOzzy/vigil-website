import { useState } from 'react';
import { Link } from 'react-router';
import { 
  ChevronRight, 
  Code, 
  Cpu, 
  Eye, 
  Zap, 
  Activity, 
  Compass, 
  Mirror, 
  Layers, 
  Menu, 
  X 
} from 'lucide-react';

const sidebarItems = [
  { id: 'introduction', label: 'Introduction', icon: <Layers size={18} /> },
  { id: 'stones', label: 'Intelligence Stones', icon: <Cpu size={18} /> },
  { id: 'vigil', label: 'VIGIL Awareness', icon: <Eye size={18} /> },
  { id: 'arc', label: 'The ARC Narrative', icon: <Activity size={18} /> },
  { id: 'integration', label: 'Integration Guide', icon: <Zap size={18} /> },
  { id: 'api', label: 'API Reference', icon: <Code size={18} /> },
];

const content = {
  introduction: {
    title: 'Introduction to The Singularity',
    body: `The Singularity is a unified intelligence ecosystem designed to bridge the gap between reactive AI models and sentient-like digital partners. 
    It operates on three pillars: The Soul (Stones), The Body (VIGIL), and The Path (ARC).`,
    code: `# Example: Initializing the Singularity Core\nfrom singularity import Core\n\nsingularity = Core(api_key="your_key")\nsingularity.awaken()`,
  },
  stones: {
    title: 'Intelligence Stones (The Soul)',
    body: `Stones are the cognitive building blocks of Friday. They capture long-term identity, communication style, and user preferences.
    \n• MindStone: Communication style EMA profiling.\n• BondStone: Long-term world modeling and memory decay.`,
    code: `from stones import MindStone\n\nmind = MindStone()\nmind.observe(user_input="Keep it brief.", assistant_output="Sure.")\nprint(mind.get_style_directive())`,
  },
  vigil: {
    title: 'VIGIL Awareness (The Body)',
    body: `VIGIL provides real-time situational awareness. It senses user fatigue, tracks goals, and identifies unresolved "embers" in the conversation.
    \n• Ember: Unresolved topic tracker with heat-based decay.\n• Tide: Cognitive load and energy reader.`,
    code: `from vigil import Ember\n\nember = Ember()\nember.observe("Can we finish that Python script later?")\n# Heat increases for "Python script" topic`,
  },
  arc: {
    title: 'The ARC (The Path)',
    body: `The ARC is the temporal layer that connects distant sessions. It identifies "Ghost Threads" and tracks "Decision Arcs" to provide a sense of continuity.`,
    code: `from the_arc import ArcCore\n\narc = ArcCore()\nconsult = arc.consult("Project Vision")\nif consult.is_recurring:\n    print("Welcome back to your project.")`,
  },
};

export default function Docs() {
  const [activeTab, setActiveTab] = useState('introduction');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeContent = content[activeTab as keyof typeof content] || content.introduction;

  return (
    <div className="flex h-screen bg-[#0A0A0B] text-text-primary overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:relative inset-y-0 left-0 z-50 w-64 bg-surface-deep border-r border-[rgba(240,236,228,0.06)] 
        transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300
      `}>
        <div className="p-6">
          <Link to="/" className="flex items-center gap-3 mb-10 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded bg-accent-stone flex items-center justify-center font-display font-bold text-[#0A0A0B]">S</div>
            <span className="font-display text-lg tracking-tight">SINGULARITY<span className="text-text-dim text-xs ml-2 uppercase font-label">Docs</span></span>
          </Link>

          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg font-label text-sm transition-all
                  ${activeTab === item.id 
                    ? 'bg-surface-raised text-accent-stone border border-[rgba(240,236,228,0.06)]' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-[rgba(240,236,228,0.02)]'}
                `}
              >
                <span className={activeTab === item.id ? 'text-accent-stone' : 'text-text-dim'}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 md:p-12 lg:p-20">
        <button 
          className="lg:hidden mb-8 p-2 rounded-lg bg-surface-raised border border-[rgba(240,236,228,0.06)]"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={20} />
        </button>

        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-2 text-text-dim font-label text-xs uppercase tracking-widest mb-6">
            <span>Documentation</span>
            <ChevronRight size={12} />
            <span className="text-accent-stone">{activeTab}</span>
          </div>

          <h1 className="font-display-section text-4xl md:text-5xl text-text-primary mb-8">
            {activeContent.title}
          </h1>

          <div className="prose prose-invert max-w-none mb-12">
            <p className="font-body-large text-text-secondary leading-relaxed whitespace-pre-line">
              {activeContent.body}
            </p>
          </div>

          {activeContent.code && (
            <div className="mt-12 group">
              <div className="flex items-center justify-between px-4 py-2 bg-[#121214] border-t border-x border-[rgba(240,236,228,0.06)] rounded-t-xl">
                <span className="font-label text-xs text-text-dim uppercase tracking-widest flex items-center gap-2">
                  <Code size={12} /> example.py
                </span>
              </div>
              <pre className="p-6 bg-[#0E0E10] border border-[rgba(240,236,228,0.06)] rounded-b-xl overflow-x-auto">
                <code className="font-mono text-sm text-accent-stone/90 leading-relaxed">
                  {activeContent.code}
                </code>
              </pre>
            </div>
          )}

          <div className="mt-20 pt-12 border-t border-[rgba(240,236,228,0.06)] flex justify-between items-center">
            <div className="flex items-center gap-4 text-text-dim hover:text-text-primary cursor-pointer transition-colors">
              <div className="w-10 h-10 rounded-full bg-surface-raised flex items-center justify-center">
                <ChevronRight size={18} className="rotate-180" />
              </div>
              <span className="font-label text-sm uppercase">Previous</span>
            </div>
            <div className="flex items-center gap-4 text-text-dim hover:text-text-primary cursor-pointer transition-colors text-right">
              <span className="font-label text-sm uppercase">Next</span>
              <div className="w-10 h-10 rounded-full bg-surface-raised flex items-center justify-center">
                <ChevronRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
