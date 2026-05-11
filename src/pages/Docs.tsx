import { useState } from 'react';
import { Link } from 'react-router';
import { 
  ChevronRight, 
  Code, 
  Cpu, 
  Eye, 
  Zap, 
  Activity, 
  Layers, 
  Menu 
} from 'lucide-react';

const sidebarItems = [
  { id: 'introduction', label: 'Introduction', icon: <Layers size={18} /> },
  { id: 'integration', label: 'Integration Guide', icon: <Zap size={18} /> },
  { id: 'arc', label: 'The ARC (The Path)', icon: <Activity size={18} /> },
  { id: 'stones', label: 'VIGIL Stones (The Body)', icon: <Cpu size={18} /> },
  { id: 'api', label: 'API Reference', icon: <Code size={18} /> },
];

const content = {
  introduction: {
    title: 'The Awareness Layer',
    body: `VIGIL and THE ARC form the awareness layers of an AI assistant. While traditional LLMs are reactive, the Singularity ecosystem enables an assistant that understands the narrative trajectory and the current behavioral state of the user.

┌─────────────────────────────────────────────────────────────┐
│  Layer 1 — Narrative (THE ARC)                              │
│  → Where is the user going? What decisions were made?       │
│    Which topics are resurfacing?                            │
├─────────────────────────────────────────────────────────────┤
│  Layer 2 — User State (TideStone)                           │
│  → How is the user feeling right now? High energy?          │
│    Focused? Tired?                                          │
├─────────────────────────────────────────────────────────────┤
│  Layer 3 — Goals (CompassStone)                             │
│  → What are the user's goals? Is progress being made?       │
├─────────────────────────────────────────────────────────────┤
│  Layer 4 — Recurrence (EmberStone)                          │
│  → What topics does the user keep returning to?             │
│    Which ones are "hot"?                                    │
├─────────────────────────────────────────────────────────────┤
│  Layer 5 — Self-Awareness (MirrorStone)                     │
│  → How confident is the assistant about this domain?        │
│    Is it using hedging language?                            │
└─────────────────────────────────────────────────────────────┘`,
    code: `# The core loop logic:
# 1. OBSERVE: Every message/response is fed to the stones.
# 2. CONSULT: Before the next LLM call, stones provide directives.
# 3. GENERATE: LLM uses the enriched system prompt.`,
  },
  integration: {
    title: 'Step-by-Step Integration',
    body: `Integrating VIGIL Stones into your existing AI assistant is straightforward. Every module is a standalone Python file with zero external dependencies.

1. Copy the .py files into your project directory.
2. Initialize the stones in your assistant's constructor.
3. Call .observe() after each message.
4. Call .consult() before generating a response to enrich your prompt.`,
    code: `from vigilstones.the_arc import TheArc, TurnRecord
from vigilstones.tide_stone import TideStone
from vigilstones.compass_stone import CompassStone

class Assistant:
    def __init__(self):
        self.arc = TheArc(path="data/arc.json")
        self.tide = TideStone()
        self.compass = CompassStone()

    def chat(self, user_msg):
        # Step 1: Observe user message
        self.tide.observe_user(user_msg)
        self.compass.observe(user_msg, "")
        
        # Step 2: Build enriched prompt
        prompt = "You are a helpful assistant."
        if ctx := self.arc.consult(user_msg):
            prompt += "\\n\\n" + ctx
        if d := self.tide.get_state_directive():
            prompt += "\\n\\n" + d

        # Step 3: LLM Call
        response = llm.call(prompt, user_msg)
        
        # Step 4: Observe assistant response
        self.arc.absorb(TurnRecord(role="assistant", content=response))
        return response`,
  },
  arc: {
    title: 'THE ARC — Long-Term Narrative',
    body: `THE ARC tracks the "story" dimension of the interaction. It organizes turns into Episodes and monitors Decision Arcs.

• DECISION Detection: Automatically identifies choices like "I'll use React Native".
• GHOST THREADS: Detects recurring topics across long intervals (e.g., 30 days) and resurfaces previous context.
• REVISION: Tracks when users change their mind about previous decisions.
• FRUSTRATION: Identifies patterns of failure or recurring errors.`,
    code: `from the_arc import TheArc, TurnRecord

arc = TheArc()

# Consult the narrative before responding
context = arc.consult("React Native mobile development")

if "GHOST THREAD" in context:
    # Resurface context from a session 2 months ago
    system_prompt += "\\n" + context`,
  },
  stones: {
    title: 'VIGIL Stones — Real-Time Body',
    body: `The VIGIL layer senses the "now". 

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
  api: {
    title: 'API Reference',
    body: `Every stone follows a consistent interface.

| Module | Observe Method | Consult Method |
|:---|:---|:---|
| THE ARC | .absorb(TurnRecord) | .consult(query) |
| TideStone | .observe_user(text) | .get_state_directive() |
| CompassStone | .observe(user, ai) | .get_goal_directive() |
| EmberStone | .observe(user, ai) | .get_active_context() |
| MirrorStone | .observe(user, ai) | .get_mirror_directive() |`,
    code: `# Common stats structure returned by .get_stats():
{
    "total_turns": 142,
    "active_goals": 3,
    "hot_topics": ["asyncio", "react-native"],
    "avg_confidence": 0.88,
    "user_energy": "high"
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
