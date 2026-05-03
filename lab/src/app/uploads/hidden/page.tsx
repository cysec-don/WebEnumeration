"use client";

import { FileText, ImageIcon, FolderOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const files = [
  { name: "profile_pics/", type: "directory", size: "-", modified: "2024-01-14" },
  { name: "documents/", type: "directory", size: "-", modified: "2024-01-13" },
  { name: "temp_uploads/", type: "directory", size: "-", modified: "2024-01-15" },
  { name: "user_avatar_001.png", type: "image", size: "245 KB", modified: "2024-01-15 10:22:14" },
  { name: "user_avatar_002.jpg", type: "image", size: "189 KB", modified: "2024-01-14 15:33:47" },
  { name: "invoice_2024_001.pdf", type: "document", size: "34 KB", modified: "2024-01-13 08:12:05" },
  { name: "contract_draft.docx", type: "document", size: "128 KB", modified: "2024-01-12 16:45:22" },
  { name: "server_key.pem", type: "document", size: "3.2 KB", modified: "2024-01-10 09:00:00" },
  { name: "id_rsa_backup", type: "document", size: "3.0 KB", modified: "2024-01-10 09:00:00" },
  { name: ".env.production", type: "document", size: "1.1 KB", modified: "2024-01-08 14:22:33" },
];

export default function HiddenUploadsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm">
          <FolderOpen className="h-4 w-4 text-gray-500" />
          <span className="text-gray-500">Index of</span>
          <span className="font-mono text-gray-900">/uploads/hidden/</span>
          <Badge className="bg-red-100 text-red-800 text-[10px] ml-2">RESTRICTED</Badge>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
          <p className="text-xs text-red-700">
            ⚠️ This directory should not be web-accessible. It contains sensitive files including
            SSH keys, environment configuration, and user uploads that were meant to be private.
          </p>
        </div>
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
                    {file.type === "directory" ? (
                      <FolderOpen className="h-4 w-4 text-blue-500" />
                    ) : file.type === "image" ? (
                      <ImageIcon className="h-4 w-4 text-green-600" />
                    ) : (
                      <FileText className="h-4 w-4 text-amber-600" />
                    )}
                  </td>
                  <td className="px-4 py-2.5">
                    <span className="text-blue-600 text-sm font-mono hover:underline cursor-pointer">
                      {file.name}
                    </span>
                    {file.name.includes("key") || file.name.includes("rsa") || file.name.includes(".env") ? (
                      <Badge className="ml-2 bg-red-100 text-red-800 text-[9px]">SENSITIVE</Badge>
                    ) : null}
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
