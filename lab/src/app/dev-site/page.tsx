"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HardHat, Wrench, Database, Server, FileCode, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function DevSitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Under Construction Banner */}
      <div className="bg-yellow-500 text-yellow-900 px-4 py-2 text-center text-sm font-bold flex items-center justify-center gap-2">
        <HardHat className="h-4 w-4" />
        ⚠️ UNDER CONSTRUCTION — DEVELOPMENT SITE — DO NOT USE IN PRODUCTION ⚠️
        <HardHat className="h-4 w-4" />
      </div>

      {/* Dev Header */}
      <header className="bg-gray-800 text-white px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-yellow-400" />
            <span className="font-bold">Dev Site v0.4.2-beta</span>
            <Badge className="bg-yellow-600 text-yellow-100 text-[10px]">UNSTABLE</Badge>
          </div>
          <div className="text-xs text-gray-400 font-mono">
            Build: 2024-01-15 | Branch: feature/new-gallery | Commit: a3f7b2c
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Alert */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-red-800">This is a development environment</p>
            <p className="text-xs text-red-600 mt-1">
              This site is not intended for public access. All data is for testing purposes only.
              Debug mode is enabled. Database credentials are in /config/settings.ini.bak
            </p>
          </div>
        </div>

        {/* Dev Tools Grid */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Internal Dev Tools</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { icon: Database, title: "DB Admin", desc: "phpMyAdmin interface", path: "/backup", status: "Online" },
            { icon: Server, title: "Server Status", desc: "Apache server monitoring", path: "/api/v1/debug/status", status: "Online" },
            { icon: FileCode, title: "API v1 Docs", desc: "Swagger documentation", path: "/api/v1/docs", status: "Online" },
            { icon: HardHat, title: "Log Viewer", desc: "Error & access logs", path: "/logs", status: "Warning" },
            { icon: Wrench, title: "Git Repository", desc: "Source code browser", path: "/git", status: "Exposed!" },
            { icon: Database, title: "Backup Manager", desc: "Database backups", path: "/backup", status: "Online" },
          ].map((tool) => (
            <Link key={tool.title} href={tool.path}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-gray-200">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                    <tool.icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-gray-900">{tool.title}</h3>
                    <p className="text-xs text-gray-500">{tool.desc}</p>
                    <Badge
                      className={`mt-2 text-[10px] ${
                        tool.status === "Online"
                          ? "bg-green-100 text-green-800"
                          : tool.status === "Warning"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {tool.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Test Data */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Test Data & Endpoints</h2>
        <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-700">API v1 - Products</span>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">GET /api/v1/products</code>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-700">API v1 - Users</span>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">GET /api/v1/users</code>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-700">API v1 - Search</span>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">GET /api/v1/search?q=</code>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-700">API v2 - Admin Users</span>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">GET /api/v2/admin/users</code>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-gray-700">API v2 - Admin Config</span>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">GET /api/v2/admin/config</code>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-400">
          <p>Dev Environment | Last deploy: 2024-01-15 14:32:07 UTC | Node: v18.17.0</p>
          <p className="mt-1">⚠️ This page should NOT be accessible on production</p>
        </div>
      </main>
    </div>
  );
}
