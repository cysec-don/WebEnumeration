"use client";

import Link from "next/link";
import { FolderOpen, FileText } from "lucide-react";

const entries = [
  { name: "../", type: "dir" },
  { name: "HEAD", type: "file" },
  { name: "config", type: "file" },
  { name: "description", type: "file" },
  { name: "hooks/", type: "dir" },
  { name: "index", type: "file" },
  { name: "info/", type: "dir" },
  { name: "objects/", type: "dir" },
  { name: "refs/", type: "dir" },
  { name: "packed-refs", type: "file" },
  { name: "logs/", type: "dir" },
];

export default function GitPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm">
          <FolderOpen className="h-4 w-4 text-gray-500" />
          <span className="text-gray-500">Index of</span>
          <span className="font-mono text-gray-900">/.git/</span>
          <span className="text-red-600 text-xs font-bold ml-2">⚠️ EXPOSED</span>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
          <p className="text-xs text-red-700">
            🔴 CRITICAL: The Git repository directory is publicly accessible. This allows attackers to
            download the entire source code, including configuration files with credentials.
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-left">
                <th className="px-4 py-2 text-xs font-semibold text-gray-600 w-8"></th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600">Name</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600">Type</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.name} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-2.5">
                    {entry.type === "dir" ? (
                      <FolderOpen className="h-4 w-4 text-blue-500" />
                    ) : (
                      <FileText className="h-4 w-4 text-gray-500" />
                    )}
                  </td>
                  <td className="px-4 py-2.5">
                    {entry.name === "HEAD" ? (
                      <Link href="/git/head" className="text-blue-600 hover:underline text-sm font-mono">
                        {entry.name}
                      </Link>
                    ) : entry.name === "config" ? (
                      <Link href="/git/config" className="text-blue-600 hover:underline text-sm font-mono">
                        {entry.name}
                      </Link>
                    ) : (
                      <span className="text-blue-600 text-sm font-mono cursor-pointer">{entry.name}</span>
                    )}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-gray-500">
                    {entry.type === "dir" ? "directory" : "file"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-xs text-gray-400 text-center">
          Apache/2.4.52 (Ubuntu) Server at www.vulnerableart.shop Port 443
        </div>
      </div>
    </div>
  );
}
