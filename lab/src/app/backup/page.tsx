"use client";

import Link from "next/link";
import { FileText, Archive, Database, FolderOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const files = [
  { name: "db_dump.sql", size: "4.2 MB", modified: "2024-01-15 02:30:00", icon: Database, type: "sql" },
  { name: "config_backup.zip", size: "156 KB", modified: "2024-01-10 14:22:00", icon: Archive, type: "zip" },
  { name: "website_backup_2024.tar.gz", size: "847 MB", modified: "2024-01-01 00:00:00", icon: Archive, type: "tar" },
  { name: "../", size: "-", modified: "-", icon: FolderOpen, type: "dir" },
];

export default function BackupPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm">
          <FolderOpen className="h-4 w-4 text-gray-500" />
          <span className="text-gray-500">Index of</span>
          <span className="font-mono text-gray-900">/backup/</span>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-left">
                <th className="px-4 py-2 text-xs font-semibold text-gray-600 w-8"></th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600">Name</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600">Last Modified</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-600">Size</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.name} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-2.5">
                    <file.icon className={`h-4 w-4 ${
                      file.type === "dir" ? "text-blue-500" :
                      file.type === "sql" ? "text-green-600" :
                      "text-amber-600"
                    }`} />
                  </td>
                  <td className="px-4 py-2.5">
                    {file.name === "../" ? (
                      <span className="text-blue-600 text-sm font-mono">Parent Directory</span>
                    ) : file.name === "db_dump.sql" ? (
                      <Link href="/backup/db_dump" className="text-blue-600 hover:underline text-sm font-mono">
                        {file.name}
                      </Link>
                    ) : (
                      <span className="text-blue-600 text-sm font-mono">{file.name}</span>
                    )}
                    {file.type === "sql" && (
                      <Badge className="ml-2 bg-green-100 text-green-800 text-[9px]">SQL</Badge>
                    )}
                    {file.type === "zip" && (
                      <Badge className="ml-2 bg-amber-100 text-amber-800 text-[9px]">ZIP</Badge>
                    )}
                    {file.type === "tar" && (
                      <Badge className="ml-2 bg-red-100 text-red-800 text-[9px]">TAR.GZ</Badge>
                    )}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-gray-500 font-mono">{file.modified}</td>
                  <td className="px-4 py-2.5 text-xs text-gray-500 font-mono">{file.size}</td>
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
