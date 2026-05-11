import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Simple syntax highlighting
  const highlightCode = (code: string) => {
    return code
      .replace(/(from|import|def|if|return|class|try|except|as|else|elif|for|in|while|with|not|and|or|None|True|False|await|async)/g, '<span class="text-accent-tide">$1</span>')
      .replace(/(".*?"|'.*?')/g, '<span class="text-accent-stone">$1</span>')
      .replace(/(#.*$)/gm, '<span class="text-text-dim">$1</span>')
      .replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, '<span class="text-accent-compass">$1</span>')
      .replace(/\b(print|len|range|enumerate|zip|map|filter|sum|min|max|sorted|open|str|int|float|list|dict|set|tuple)\b/g, '<span class="text-accent-tide">$1</span>');
  };

  return (
    <div className="relative bg-surface-raised border border-[rgba(240,236,228,0.06)] rounded-lg overflow-hidden">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md text-text-dim hover:text-text-primary hover:bg-surface-deep transition-all duration-200 z-10"
        title={copied ? 'Copied!' : 'Copy'}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <pre className="font-code text-text-primary p-5 pr-12 overflow-x-auto text-[13px] leading-relaxed">
        <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
      </pre>
    </div>
  );
}
