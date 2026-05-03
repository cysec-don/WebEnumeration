"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface TerminalDisplayProps {
  content: string;
  title?: string;
  language?: string;
}

export function TerminalDisplay({ content, title, language }: TerminalDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-slate-700 bg-slate-950 shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {title && (
            <span className="text-slate-400 text-xs font-mono ml-2">{title}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {language && (
            <span className="text-slate-500 text-[10px] font-mono uppercase">{language}</span>
          )}
          <button
            onClick={handleCopy}
            className="text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Copy content"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-green-400 font-mono whitespace-pre">{content}</code>
      </pre>
    </div>
  );
}
