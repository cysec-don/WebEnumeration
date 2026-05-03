"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { RESOURCES, type DiscoverableResource } from "@/lib/discovery-data";

interface DiscoveryState {
  discoveredPaths: string[];
  discoveredAt: Record<string, string>;
}

interface DiscoveryContextType extends DiscoveryState {
  discover: (path: string) => void;
  isDiscovered: (path: string) => boolean;
  resetProgress: () => void;
  discoveredResources: DiscoverableResource[];
  totalResources: number;
  discoveredCount: number;
  progressPercentage: number;
  resourcesByDifficulty: Record<string, DiscoverableResource[]>;
}

const DiscoveryContext = createContext<DiscoveryContextType | null>(null);

const STORAGE_KEY = "vuln-art-shop-discovery";

const defaultState: DiscoveryState = { discoveredPaths: [], discoveredAt: {} };

export function DiscoveryProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<DiscoveryState>(defaultState);
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on first render via callback pattern
  const loadState = useCallback(() => {
    if (loaded) return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as DiscoveryState;
        setState(parsed);
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, [loaded]);

  // Call load on mount - using event handler pattern
  if (typeof window !== "undefined" && !loaded) {
    loadState();
  }

  const persistState = useCallback((newState: DiscoveryState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } catch {
      // ignore
    }
  }, []);

  const discover = useCallback((path: string) => {
    setState((prev) => {
      if (prev.discoveredPaths.includes(path)) return prev;
      const newState = {
        discoveredPaths: [...prev.discoveredPaths, path],
        discoveredAt: { ...prev.discoveredAt, [path]: new Date().toISOString() },
      };
      persistState(newState);
      return newState;
    });
  }, [persistState]);

  const isDiscovered = useCallback(
    (path: string) => state.discoveredPaths.includes(path),
    [state.discoveredPaths]
  );

  const resetProgress = useCallback(() => {
    const emptyState = { discoveredPaths: [], discoveredAt: {} };
    setState(emptyState);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const discoveredResources = RESOURCES.filter((r) =>
    state.discoveredPaths.includes(r.path)
  );

  const totalResources = RESOURCES.length;
  const discoveredCount = discoveredResources.length;
  const progressPercentage = totalResources > 0 ? Math.round((discoveredCount / totalResources) * 100) : 0;

  const resourcesByDifficulty = RESOURCES.reduce(
    (acc, r) => {
      if (!acc[r.difficulty]) acc[r.difficulty] = [];
      acc[r.difficulty].push(r);
      return acc;
    },
    {} as Record<string, DiscoverableResource[]>
  );

  return (
    <DiscoveryContext.Provider
      value={{
        ...state,
        discover,
        isDiscovered,
        resetProgress,
        discoveredResources,
        totalResources,
        discoveredCount,
        progressPercentage,
        resourcesByDifficulty,
      }}
    >
      {children}
    </DiscoveryContext.Provider>
  );
}

export function useDiscovery() {
  const context = useContext(DiscoveryContext);
  if (!context) {
    throw new Error("useDiscovery must be used within a DiscoveryProvider");
  }
  return context;
}
