"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Users,
  Settings,
  Database,
  Activity,
  LogOut,
  Bell,
  Search,
  ChevronRight,
} from "lucide-react";

export default function AdminPanelPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // No real auth — any credentials work
    setLoggedIn(true);
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center bg-slate-800 text-white rounded-t-lg">
            <Shield className="h-10 w-10 mx-auto mb-2 text-blue-400" />
            <CardTitle className="text-xl">Admin Panel</CardTitle>
            <p className="text-slate-400 text-sm">The Vulnerable Art Shop</p>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1.5">Username</label>
                <Input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border-slate-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1.5">Password</label>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-slate-300"
                />
              </div>
              <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-900">
                Sign In
              </Button>
              <p className="text-center text-xs text-slate-400 mt-3">
                ⚠️ Authentication disabled for maintenance
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Top Bar */}
      <div className="bg-slate-800 text-white px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-blue-400" />
            <span className="font-bold">Admin Dashboard</span>
            <Badge variant="outline" className="border-blue-400/30 text-blue-400 text-[10px]">
              SUPER ADMIN
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="h-4 w-4 text-slate-400 cursor-pointer" />
            <span className="text-sm text-slate-300">admin@vulnerableart.shop</span>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="grid lg:grid-cols-[240px,1fr] gap-6">
          {/* Sidebar */}
          <nav className="space-y-1">
            {[
              { icon: Activity, label: "Dashboard", active: true },
              { icon: Users, label: "User Management", active: false },
              { icon: Database, label: "Database", active: false },
              { icon: Settings, label: "System Settings", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm ${
                  item.active
                    ? "bg-slate-800 text-white"
                    : "text-slate-600 hover:bg-slate-200"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
                <ChevronRight className="h-3 w-3 ml-auto" />
              </div>
            ))}
            <Separator className="my-2" />
            <div className="px-3 py-2 text-xs text-slate-400">
              <p>Server: prod-web-01</p>
              <p>DB: MySQL 8.0.32</p>
              <p>PHP: 8.2.4</p>
              <p>OS: Ubuntu 22.04 LTS</p>
            </div>
          </nav>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Search..." className="pl-9 w-64 border-slate-300" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Total Users", value: "12,847", change: "+12%" },
                { label: "Revenue", value: "$48,290", change: "+8%" },
                { label: "Orders", value: "1,234", change: "+23%" },
                { label: "Active Sessions", value: "89", change: "Now" },
              ].map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="p-4">
                    <p className="text-xs text-slate-500">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                    <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { action: "User login", user: "admin@vulnerableart.shop", time: "2 min ago", type: "auth" },
                    { action: "Database backup completed", user: "system", time: "1 hour ago", type: "system" },
                    { action: "New user registered", user: "john.doe@email.com", time: "3 hours ago", type: "user" },
                    { action: "Payment processed", user: "sarah.smith@email.com", time: "5 hours ago", type: "payment" },
                    { action: "Config file updated", user: "admin@vulnerableart.shop", time: "1 day ago", type: "system" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          item.type === "auth" ? "bg-blue-500" :
                          item.type === "system" ? "bg-amber-500" :
                          item.type === "user" ? "bg-green-500" :
                          "bg-purple-500"
                        }`} />
                        <div>
                          <p className="text-sm text-slate-900">{item.action}</p>
                          <p className="text-xs text-slate-500">{item.user}</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">{item.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
