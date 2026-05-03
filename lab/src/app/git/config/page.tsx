"use client";

import { TerminalDisplay } from "@/components/TerminalDisplay";

const gitConfig = `[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
[remote "origin"]
	url = https://admin:Gl4ss_Art1st_2024@gitlab.internal.vulnerableart.shop/dev-team/vulnerable-art-shop.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
	remote = origin
	merge = refs/heads/main
[branch "feature/new-gallery"]
	remote = origin
	merge = refs/heads/feature/new-gallery
[user]
	name = System Administrator
	email = admin@vulnerableart.shop
[credential]
	helper = store --file ~/.git-credentials
[push]
	default = current
[pull]
	rebase = true`;

export default function GitConfigPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
            <span className="text-orange-400 font-bold text-xs">GIT</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">.git/config</h1>
            <p className="text-xs text-slate-500">Git repository configuration file</p>
          </div>
        </div>
        <div className="bg-red-950/30 border border-red-500/20 rounded-lg p-3 mb-6">
          <p className="text-xs text-red-400">
            🔴 CRITICAL: This file contains the remote repository URL with embedded credentials!
            The GitLab username and password are visible in plaintext.
          </p>
        </div>
        <TerminalDisplay content={gitConfig} title=".git/config" language="ini" />
      </div>
    </div>
  );
}
