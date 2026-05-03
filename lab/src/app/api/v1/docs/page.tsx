"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/products",
    description: "List all products in the catalog",
    params: "category (optional), page (optional), limit (optional)",
    response: '{ "products": [...], "total": 142, "page": 1 }',
    auth: false,
  },
  {
    method: "GET",
    path: "/api/v1/users",
    description: "List users (limited public info)",
    params: "page (optional), limit (optional)",
    response: '{ "users": [{ "id": 1, "username": "...", "avatar": "..." }] }',
    auth: false,
  },
  {
    method: "GET",
    path: "/api/v1/search",
    description: "Search products and users",
    params: "q (required), type (optional: products|users|all)",
    response: '{ "results": { "products": [...], "users": [...] } }',
    auth: false,
  },
  {
    method: "GET",
    path: "/api/v1/debug/status",
    description: "Server debug status endpoint (⚠️ should be disabled in production)",
    params: "none",
    response: '{ "status": "ok", "version": "...", "env": {...} }',
    auth: false,
  },
  {
    method: "GET",
    path: "/api/v2/admin/users",
    description: "Full user list with sensitive data (⚠️ admin only — currently unauthenticated)",
    params: "include_deleted (optional), format (optional)",
    response: '{ "users": [{ "id": 1, "email": "...", "password_hash": "..." }] }',
    auth: true,
  },
  {
    method: "GET",
    path: "/api/v2/admin/config",
    description: "Server configuration with secrets (⚠️ admin only — currently unauthenticated)",
    params: "section (optional)",
    response: '{ "database": {...}, "secrets": {...}, "keys": {...} }',
    auth: true,
  },
];

const methodColors: Record<string, string> = {
  GET: "bg-green-600",
  POST: "bg-blue-600",
  PUT: "bg-amber-600",
  DELETE: "bg-red-600",
  PATCH: "bg-purple-600",
};

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold">API Documentation</h1>
            <Badge className="bg-blue-600">v1</Badge>
            <Badge className="bg-red-600">v2</Badge>
          </div>
          <p className="text-gray-400">
            The Vulnerable Art Shop — REST API Reference
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="p-4">
            <p className="text-sm text-amber-800 font-semibold">⚠️ Warning: API v2 endpoints are unprotected</p>
            <p className="text-xs text-amber-700 mt-1">
              The v2 admin endpoints currently lack authentication. This is a known issue that will be
              fixed before launch. Do NOT expose these endpoints in production.
            </p>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Endpoints</h2>
          <div className="space-y-4">
            {endpoints.map((ep, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="bg-white pb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`${methodColors[ep.method]} text-white text-xs font-bold px-2.5 py-1 rounded`}>
                      {ep.method}
                    </span>
                    <code className="text-sm font-mono text-gray-800">{ep.path}</code>
                    {ep.auth && (
                      <Badge variant="destructive" className="text-[10px]">Admin Only</Badge>
                    )}
                  </div>
                  <CardDescription className="text-sm text-gray-600 mt-1">{ep.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">Parameters</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded block">{ep.params}</code>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">Response</p>
                    <pre className="text-xs bg-gray-900 text-green-400 p-3 rounded-lg overflow-x-auto font-mono">
                      {ep.response}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator />

        <div className="text-center text-xs text-gray-400">
          <p>API v1.4.2 | Base URL: https://www.vulnerableart.shop | Contact: dev@vulnerableart.shop</p>
        </div>
      </div>
    </div>
  );
}
