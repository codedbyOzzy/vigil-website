import { useState } from 'react';
import { Link } from 'react-router';
import { 
  ChevronRight, 
  Code, 
  Cpu, 
  Zap, 
  Activity, 
  Layers, 
  Menu,
  Terminal,
  Brain
} from 'lucide-react';

const sidebarItems = [
  { id: 'introduction', label: 'INTRODUCTION', icon: <Layers size={18} /> },
  { id: 'intelligence_stones', label: 'INTELLIGENCE STONES', icon: <Brain size={18} /> },
  { id: 'vigil_awareness', label: 'VIGIL AWARENESS', icon: <Cpu size={18} /> },
  { id: 'arc_narrative', label: 'THE ARC NARRATIVE', icon: <Activity size={18} /> },
  { id: 'integration_guide', label: 'INTEGRATION GUIDE', icon: <Zap size={18} /> },
  { id: 'api_reference', label: 'API REFERENCE', icon: <Code size={18} /> },
];

const content = {
  introduction: {
    title: 'Introduction to The Singularity',
    body: `The Singularity is a unified intelligence ecosystem designed to bridge the gap between reactive AI models and sentient-like digital partners. It operates on three pillars: The Soul (Stones), The Body (VIGIL), and The Path (ARC).

VIGIL and THE ARC form the awareness layers of an AI assistant. While traditional LLMs are reactive, the Singularity ecosystem enables an assistant that understands the narrative trajectory and the current behavioral state of the user.`,
    code: `# No dependencies required. 
# Just drop the .py files into your project.
# Python 3.9+ recommended.`,
  },
  intelligence_stones: {
    title: 'Intelligence Stones (The Soul)',
    body: `Intelligence Stones are the cognitive building blocks of the ecosystem. They focus on "Who" the user is and "How" the assistant should communicate.

• MindStone: Communication style EMA profiling.
• EchoStone: Long-term world modeling and memory decay.
• BondStone: Personal relationship and preference tracking.
• IntuitionStone: Pattern recognition across different domains.`,
    code: `from stones import MindStone

mind = MindStone()
mind.observe(user_input="Keep it brief.", assistant_output="Sure.")
print(mind.get_style_directive())`,
  },
  vigil_awareness: {
    title: 'VIGIL Awareness (The Body)',
    body: `The VIGIL layer senses the "Now". It focuses on real-time awareness and behavioral signals.

• TideStone: Reads energy, pace, and focus. If a user is typing fast at 1 AM with short messages, Tide suggests keeping responses brief.
• CompassStone: Extracts session and project goals. It knows "Why" the user is asking "What".
• EmberStone: Tracks topic heat. Topics gain heat (+0.15) on recurrence and decay (-0.02/day) with silence.
• MirrorStone: Scans assistant output for hedging (e.g., "I think", "maybe"). Builds a domain-specific confidence model.`,
    code: `# Ember Heat Lifecycle Example:
# Topic appears -> HEAT 0.30
# Recurrence    -> HEAT +0.15
# Silent day    -> HEAT -0.02
# "Done" signal -> HEAT -0.30 (Resolved)`,
  },
  arc_narrative: {
    title: 'The ARC (The Path)',
    body: `THE ARC is the narrative wisdom layer. It doesn't just store logs; it understands the story arc of the user's journey.

• Decision Tracking: Identifies when a user makes a definitive choice (e.g., "I'll use React").
• Ghost Threads: Bridges the gap between sessions separated by days or weeks.
• Growth Fingerprint: Recognizes user maturity in specific topics over time.

EPISODE STATES:
• DETECTED (0.1): Pattern matched.
• ACTIVE (0.6): Ongoing focus.
• WARM (0.8): Recurring daily.
• DORMANT (0.2): Silent for >7 days.`,
    code: `# THE ARC API Reference
arc.absorb(TurnRecord)       # Record a conversation turn
arc.consult(query)           # Get narrative directive
arc.get_decision_context(q)  # Summarize past decisions`,
  },
  integration_guide: {
    title: 'Step-by-Step Integration',
    body: `Follow these steps to integrate the ecosystem into your assistant:

1. **Setup Folder Structure**: Create a 'vigilstones' folder and copy all .py files.
2. **Initialize Modules**: Start modules in your assistant constructor.
3. **The Observation Loop**: Feed user messages and assistant responses to the stones immediately.
4. **The Consult Loop**: Ask stones for prompt directives before each generation.`,
    code: `from vigilstones.the_arc import TheArc, TurnRecord
from vigilstones.tide_stone import TideStone

class MyAssistant:
    def __init__(self):
        self.arc = TheArc(path="data/arc.json")
        self.tide = TideStone(min_turns=3)

    def get_response(self, user_msg):
        # 1. Observe
        self.tide.observe_user(user_msg)
        
        # 2. Consult
        ctx = self.arc.consult(user_msg)
        system_prompt = f"Base... {ctx}"
        
        # 3. Generate & Observe Assistant
        response = llm.call(system_prompt, user_msg)
        self.arc.absorb(TurnRecord(role="assistant", content=response))
        return response`,
  },
  api_reference: {
    title: 'API Reference',
    body: `Full technical specification for the ecosystem modules.

| Class | Constructor | Key Method |
|:---|:---|:---|
| **TheArc** | \`path, decay_per_day\` | \`.consult(query)\` |
| **TideStone** | \`min_turns, max_window\` | \`.get_state_directive()\` |
| **CompassStone** | \`path, save_every\` | \`.get_goal_directive()\` |
| **EmberStone** | \`path, heat_boost\` | \`.get_active_context()\` |
| **MirrorStone** | \`path, save_every\` | \`.estimate_confidence(q)\` |`,
    code: `# Example Stats Result:
{
  "total_episodes": 42,
  "ghost_threads": 5,
  "active_goals": 2,
  "confidence_score": 0.91,
  "user_pace": "brisk"
}`,
  },
};

export default function Docs() {
  const [activeTab, setActiveTab] = useState('introduction');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const currentIndex = sidebarItems.findIndex(item => item.id === activeTab);
  
  const activeContent = content[activeTab as keyof typeof content] || content.introduction;

  const handleNext = () => {
    if (currentIndex < sidebarItems.length - 1) {
      setActiveTab(sidebarItems[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveTab(sidebarItems[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex h-screen bg-[#0A0A0B] text-text-primary overflow-hidden font-body">
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
                  window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <span className="text-accent-stone">{activeTab.replace('_', ' ').toUpperCase()}</span>
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
                  <Terminal size={12} /> code_example.py
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
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex items-center gap-4 transition-colors ${currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'text-text-dim hover:text-text-primary cursor-pointer'}`}
            >
              <div className="w-10 h-10 rounded-full bg-surface-raised flex items-center justify-center">
                <ChevronRight size={18} className="rotate-180" />
              </div>
              <span className="font-label text-sm uppercase">Previous</span>
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex === sidebarItems.length - 1}
              className={`flex items-center gap-4 transition-colors text-right ${currentIndex === sidebarItems.length - 1 ? 'opacity-20 cursor-not-allowed' : 'text-text-dim hover:text-text-primary cursor-pointer'}`}
            >
              <span className="font-label text-sm uppercase">Next</span>
              <div className="w-10 h-10 rounded-full bg-surface-raised flex items-center justify-center">
                <ChevronRight size={18} />
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
