import React from 'react';
import { X, Terminal, ExternalLink, Copy, Check } from 'lucide-react';

interface QuickStartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickStartModal({ isOpen, onClose }: QuickStartModalProps) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const codeExample = `from vigilstones.the_arc import TheArc, TurnRecord
from vigilstones.tide_stone import TideStone

# 1. Initialize
arc = TheArc(path="data/arc.json")
tide = TideStone()

# 2. Observe & Consult
tide.observe_user("Hello Singularity")
ctx = arc.consult("Hello Singularity")

# 3. Generate with Awareness
# system_prompt += f"\\n\\n{ctx}"`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#0E0E10] border border-[rgba(240,236,228,0.08)] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[rgba(240,236,228,0.06)] bg-surface-raised/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-accent-stone flex items-center justify-center">
              <Terminal size={18} className="text-[#0A0A0B]" />
            </div>
            <div>
              <h3 className="font-display text-lg text-text-primary">Quick Start Guide</h3>
              <p className="font-label text-[10px] text-text-dim uppercase tracking-widest">Minimal Integration</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-surface-raised text-text-dim hover:text-text-primary transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border border-accent-stone/30 flex items-center justify-center font-label text-xs text-accent-stone">1</div>
              <div>
                <h4 className="font-label text-xs uppercase tracking-widest text-text-primary mb-2">Clone & Copy</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Download the <code className="text-accent-stone bg-accent-stone/10 px-1 rounded">.py</code> modules from GitHub and drop them into your project's <code className="text-accent-stone bg-accent-stone/10 px-1 rounded">/vigilstones</code> directory.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border border-accent-stone/30 flex items-center justify-center font-label text-xs text-accent-stone">2</div>
              <div className="flex-1">
                <h4 className="font-label text-xs uppercase tracking-widest text-text-primary mb-2">Minimal Implementation</h4>
                <div className="relative group">
                  <button 
                    onClick={copyToClipboard}
                    className="absolute top-3 right-3 p-2 rounded bg-surface-void border border-[rgba(240,236,228,0.06)] text-text-dim hover:text-accent-stone transition-all opacity-0 group-hover:opacity-100"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                  <pre className="p-5 bg-surface-void rounded-xl border border-[rgba(240,236,228,0.04)] overflow-x-auto">
                    <code className="font-mono text-[13px] text-accent-stone/80 leading-relaxed whitespace-pre">
                      {codeExample}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border border-accent-stone/30 flex items-center justify-center font-label text-xs text-accent-stone">3</div>
              <div>
                <h4 className="font-label text-xs uppercase tracking-widest text-text-primary mb-2">Go Deeper</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Every stone is standalone. Use MirrorStone for confidence tracking or EmberStone for hot-topic awareness.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-surface-raised/30 border-t border-[rgba(240,236,228,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-text-dim font-label italic italic-stone">
            "Awareness is not a feature, it's a layer."
          </p>
          <a 
            href="https://github.com/codedbyOzzy/THESingularity/blob/master/INSTALLATION_GUIDE.md" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-accent-stone text-[#0A0A0B] rounded-lg font-label text-xs uppercase tracking-widest hover:brightness-110 transition-all group"
          >
            Read Full Guide on GitHub
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
