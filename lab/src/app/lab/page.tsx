"use client";

import { useState } from "react";
import Link from "next/link";
import { useDiscovery } from "@/components/DiscoveryProvider";
import { TerminalDisplay } from "@/components/TerminalDisplay";
import {
  RESOURCES,
  DIFFICULTY_COLORS,
  DIFFICULTY_BG,
  DIFFICULTY_BADGE,
  TOOL_INFO,
  type Difficulty,
} from "@/lib/discovery-data";
import {
  Shield,
  RotateCcw,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Terminal,
  Bug,
  BookOpen,
  Lightbulb,
  Target,
  Trophy,
  Lock,
  Unlock,
  Palette,
  Eye,
  EyeOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const difficultyIcons: Record<Difficulty, string> = {
  easy: "🟢",
  medium: "🟡",
  hard: "🟠",
  expert: "🔴",
};

const difficultyOrder: Difficulty[] = ["easy", "medium", "hard", "expert"];

export default function LabDashboard() {
  const {
    discoveredPaths,
    discoveredAt,
    resetProgress,
    totalResources,
    discoveredCount,
    progressPercentage,
    resourcesByDifficulty,
  } = useDiscovery();
  const [revealHints, setRevealHints] = useState<Record<string, number>>({});
  const [showSecretLab, setShowSecretLab] = useState(false);

  const getHintLevel = (id: string) => revealHints[id] ?? 0;

  const revealNextHint = (id: string) => {
    setRevealHints((prev) => ({
      ...prev,
      [id]: Math.min((prev[id] ?? 0) + 1, 3),
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <Terminal className="h-5 w-5 text-cyan-400" />
              <span className="font-bold text-lg tracking-tight">
                <span className="text-cyan-400">&gt;</span> Lab Dashboard
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800">
                  <Palette className="h-4 w-4 mr-2" />
                  Art Shop
                </Button>
              </Link>
              <Button
                variant="destructive"
                size="sm"
                onClick={resetProgress}
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-cyan-400">{discoveredCount}</p>
              <p className="text-xs text-slate-400 mt-1">Discovered</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-slate-300">{totalResources}</p>
              <p className="text-xs text-slate-400 mt-1">Total Resources</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-emerald-400">{progressPercentage}%</p>
              <p className="text-xs text-slate-400 mt-1">Progress</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-amber-400">
                {discoveredCount >= totalResources ? "🏆" : `${totalResources - discoveredCount}`}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {discoveredCount >= totalResources ? "Complete!" : "Remaining"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Progress Bar */}
        <Card className="bg-slate-900 border-slate-800 mb-8">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-300">Overall Discovery Progress</span>
              <span className="text-sm text-cyan-400 font-mono">{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-3 bg-slate-800 [&>div]:bg-gradient-to-r [&>div]:from-cyan-500 [&>div]:to-emerald-500" />
            <div className="flex gap-4 mt-3 text-xs text-slate-500">
              {difficultyOrder.map((d) => {
                const resources = resourcesByDifficulty[d] || [];
                const found = resources.filter((r) => discoveredPaths.includes(r.path)).length;
                return (
                  <span key={d} className="flex items-center gap-1">
                    {difficultyIcons[d]} {found}/{resources.length} {d}
                  </span>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Main Tabs */}
        <Tabs defaultValue="resources" className="space-y-6">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="resources" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              <Target className="h-4 w-4 mr-2" /> Resources
            </TabsTrigger>
            <TabsTrigger value="tools" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              <Bug className="h-4 w-4 mr-2" /> Tools
            </TabsTrigger>
            <TabsTrigger value="guide" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              <BookOpen className="h-4 w-4 mr-2" /> Guide
            </TabsTrigger>
            <TabsTrigger value="log" className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
              <Shield className="h-4 w-4 mr-2" /> Log
            </TabsTrigger>
          </TabsList>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            {difficultyOrder.map((difficulty) => {
              const resources = resourcesByDifficulty[difficulty] || [];
              if (resources.length === 0) return null;
              return (
                <div key={difficulty}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{difficultyIcons[difficulty]}</span>
                    <h3 className={`text-lg font-bold capitalize ${DIFFICULTY_COLORS[difficulty]}`}>
                      {difficulty} Difficulty
                    </h3>
                    <Badge variant="outline" className="border-slate-700 text-slate-400">
                      {resources.filter((r) => discoveredPaths.includes(r.path)).length}/{resources.length}
                    </Badge>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {resources.map((resource) => {
                      const found = discoveredPaths.includes(resource.path);
                      return (
                        <Card
                          key={resource.id}
                          className={`border transition-all ${
                            found
                              ? "bg-slate-900/80 border-cyan-500/30 shadow-cyan-500/5 shadow-lg"
                              : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                          }`}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  {found ? (
                                    <Unlock className="h-4 w-4 text-cyan-400 shrink-0" />
                                  ) : (
                                    <Lock className="h-4 w-4 text-slate-600 shrink-0" />
                                  )}
                                  <h4 className="font-semibold text-sm truncate">
                                    {found ? resource.displayName : "???"}
                                  </h4>
                                </div>
                                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                                  {found ? resource.description : "Discover this resource to reveal details."}
                                </p>
                                {found && (
                                  <div className="mt-2 flex flex-wrap gap-1">
                                    <Badge className={`text-[10px] ${DIFFICULTY_BADGE[resource.difficulty]}`}>
                                      {resource.difficulty}
                                    </Badge>
                                    <Badge variant="outline" className="text-[10px] border-slate-700 text-slate-400">
                                      {resource.category}
                                    </Badge>
                                  </div>
                                )}
                                {found && discoveredAt[resource.path] && (
                                  <p className="text-[10px] text-slate-600 mt-2 font-mono">
                                    Found: {new Date(discoveredAt[resource.path]).toLocaleString()}
                                  </p>
                                )}
                              </div>
                              <div className="flex flex-col gap-1 ml-2">
                                {found ? (
                                  <Link href={resource.path}>
                                    <Button size="sm" variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 h-7 text-xs">
                                      <ExternalLink className="h-3 w-3" />
                                    </Button>
                                  </Link>
                                ) : (
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    className="text-slate-500 hover:text-amber-400 h-7 text-xs"
                                    onClick={() => revealNextHint(resource.id)}
                                  >
                                    <Lightbulb className="h-3 w-3" />
                                  </Button>
                                )}
                              </div>
                            </div>
                            {/* Hints */}
                            {getHintLevel(resource.id) > 0 && !found && (
                              <div className="mt-3 pt-3 border-t border-slate-800">
                                <p className="text-[10px] text-amber-400/60 uppercase tracking-wider mb-1">Hints</p>
                                {resource.hints.slice(0, getHintLevel(resource.id)).map((hint, i) => (
                                  <p key={i} className="text-xs text-amber-200/70 mt-1">
                                    💡 {hint}
                                  </p>
                                ))}
                                {getHintLevel(resource.id) < resource.hints.length && (
                                  <Button
                                    size="sm"
                                    variant="link"
                                    className="text-amber-400/50 hover:text-amber-400 p-0 h-auto text-[10px] mt-1"
                                    onClick={() => revealNextHint(resource.id)}
                                  >
                                    More hints...
                                  </Button>
                                )}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </TabsContent>

          {/* Tools Tab */}
          <TabsContent value="tools" className="space-y-6">
            {Object.entries(TOOL_INFO).map(([key, tool]) => (
              <Card key={key} className="bg-slate-900 border-slate-800">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <Terminal className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">{tool.name}</CardTitle>
                      <CardDescription className="text-slate-400 text-sm">{tool.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Example Command for This Lab</h4>
                    <TerminalDisplay content={tool.exampleCommand} title={`${tool.name} Command`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Strengths</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {tool.strengths.map((s, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Tips</h4>
                    <ul className="space-y-2">
                      {tool.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <Lightbulb className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                      Resources This Tool Can Find
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {RESOURCES.filter((r) => r.tools.includes(tool.name)).map((r) => {
                        const found = discoveredPaths.includes(r.path);
                        return (
                          <Badge
                            key={r.id}
                            variant={found ? "default" : "outline"}
                            className={
                              found
                                ? `${DIFFICULTY_BADGE[r.difficulty]} text-white`
                                : "border-slate-700 text-slate-500"
                            }
                          >
                            {found ? r.displayName : `(${r.difficulty})`}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Guide Tab */}
          <TabsContent value="guide" className="space-y-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-cyan-400" /> How to Use This Lab
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-sm text-slate-300">
                <section>
                  <h3 className="text-lg font-bold text-white mb-2">🎯 Lab Overview</h3>
                  <p>
                    &quot;The Vulnerable Art Shop&quot; is a deliberately vulnerable web application
                    designed as a hands-on lab for learning web enumeration tools. It contains
                    <strong className="text-cyan-400"> {totalResources} hidden resources</strong> at
                    varying difficulty levels that you need to discover using techniques from the textbook.
                  </p>
                </section>

                <Separator className="bg-slate-800" />

                <section>
                  <h3 className="text-lg font-bold text-white mb-2">🔍 How Discovery Works</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Navigate to hidden URLs to &quot;discover&quot; resources</li>
                    <li>Each discovered resource triggers a notification and gets logged</li>
                    <li>Your progress is tracked in localStorage (persists across sessions)</li>
                    <li>Use the hint system on the Resources tab if you get stuck</li>
                    <li>Check the Tools tab for tool-specific commands and strategies</li>
                  </ol>
                </section>

                <Separator className="bg-slate-800" />

                <section>
                  <h3 className="text-lg font-bold text-white mb-2">🗺️ Route Mapping</h3>
                  <p className="mb-3">
                    Since this is a browser-based simulation, some paths are adapted from their real-world equivalents:
                  </p>
                  <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs space-y-1">
                    <p><span className="text-slate-500">Real Path</span> → <span className="text-cyan-400">Lab Path</span></p>
                    <p><span className="text-slate-500">/.git/</span> → <span className="text-cyan-400">/git/</span></p>
                    <p><span className="text-slate-500">/.git/config</span> → <span className="text-cyan-400">/git/config/</span></p>
                    <p><span className="text-slate-500">/.git/HEAD</span> → <span className="text-cyan-400">/git/head/</span></p>
                    <p><span className="text-slate-500">/phpinfo.php</span> → <span className="text-cyan-400">/phpinfo/</span></p>
                    <p><span className="text-slate-500">/robots.txt</span> → <span className="text-cyan-400">/api/robots/</span></p>
                    <p><span className="text-slate-500">/backup/db_dump.sql</span> → <span className="text-cyan-400">/backup/db_dump/</span></p>
                    <p><span className="text-slate-500">/config/settings.ini.bak</span> → <span className="text-cyan-400">/config/settings-bak/</span></p>
                    <p><span className="text-slate-500">/exports/users.csv</span> → <span className="text-cyan-400">/exports/users/</span></p>
                    <p><span className="text-slate-500">/logs/error.log</span> → <span className="text-cyan-400">/logs/</span></p>
                  </div>
                </section>

                <Separator className="bg-slate-800" />

                <section>
                  <h3 className="text-lg font-bold text-white mb-2">🛠️ Tool Quick Reference</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {Object.entries(TOOL_INFO).map(([key, tool]) => (
                      <AccordionItem key={key} value={key} className="border-slate-800">
                        <AccordionTrigger className="text-cyan-400 hover:text-cyan-300 text-sm">
                          {tool.name}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-400">
                          <p className="mb-2">{tool.description}</p>
                          <TerminalDisplay content={tool.exampleCommand} title="Example" />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>

                <Separator className="bg-slate-800" />

                <section>
                  <h3 className="text-lg font-bold text-white mb-2">💡 General Tips</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 shrink-0">→</span>
                      Always start by checking <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">/robots.txt</code> and HTML source comments
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 shrink-0">→</span>
                      Use recursive scanning to find nested directories
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 shrink-0">→</span>
                      Try common backup extensions: <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">.bak, .old, .save, .orig, .zip, .tar.gz</code>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 shrink-0">→</span>
                      Enumerate API versions: v1, v2, v3...
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 shrink-0">→</span>
                      Don&apos;t forget to check HTTP response headers for information leakage
                    </li>
                  </ul>
                </section>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Discovery Log Tab */}
          <TabsContent value="log" className="space-y-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-400" /> Discovery Log
                </CardTitle>
                <CardDescription>
                  {discoveredCount} of {totalResources} resources discovered
                </CardDescription>
              </CardHeader>
              <CardContent>
                {discoveredCount === 0 ? (
                  <div className="text-center py-12">
                    <EyeOff className="h-12 w-12 text-slate-700 mx-auto mb-3" />
                    <p className="text-slate-500">No resources discovered yet.</p>
                    <p className="text-slate-600 text-sm mt-1">Start exploring the Art Shop to find hidden pages!</p>
                  </div>
                ) : (
                  <ScrollArea className="max-h-96">
                    <div className="space-y-3">
                      {[...RESOURCES]
                        .filter((r) => discoveredPaths.includes(r.path))
                        .sort((a, b) => {
                          const ta = discoveredAt[a.path] || "";
                          const tb = discoveredAt[b.path] || "";
                          return tb.localeCompare(ta);
                        })
                        .map((resource) => (
                          <div
                            key={resource.id}
                            className={`flex items-center justify-between p-3 rounded-lg border ${DIFFICULTY_BG[resource.difficulty]}`}
                          >
                            <div className="flex items-center gap-3">
                              <Unlock className="h-4 w-4 text-cyan-400" />
                              <div>
                                <p className="text-sm font-semibold text-white">{resource.displayName}</p>
                                <p className="text-xs text-slate-400 font-mono">{resource.path}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className={`${DIFFICULTY_BADGE[resource.difficulty]} text-[10px]`}>
                                {resource.difficulty}
                              </Badge>
                              <p className="text-[10px] text-slate-500 mt-1">
                                {discoveredAt[resource.path]
                                  ? new Date(discoveredAt[resource.path]).toLocaleString()
                                  : ""}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </ScrollArea>
                )}
              </CardContent>
            </Card>

            {/* Secret discovery button for fun */}
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-slate-600" />
                  <div>
                    <p className="text-sm text-slate-400">Looking for more?</p>
                    <p className="text-xs text-slate-600">Try viewing the page source of the Art Shop homepage...</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:text-cyan-400"
                  onClick={() => setShowSecretLab(!showSecretLab)}
                >
                  {showSecretLab ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </Button>
              </CardContent>
              {showSecretLab && (
                <div className="px-4 pb-4">
                  <TerminalDisplay
                    title="HTML Comment Hint"
                    content={`<!-- TODO: Remove dev-site before launch -->\n\nFound in the Art Shop homepage source!\nThis hint points to: /dev-site/`}
                  />
                </div>
              )}
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="mt-auto bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-slate-600">
          The Vulnerable Art Shop — Security Lab &bull; For educational purposes only
        </div>
      </footer>
    </div>
  );
}
