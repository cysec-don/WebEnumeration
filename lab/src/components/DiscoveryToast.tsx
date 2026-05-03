"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { useDiscovery } from "./DiscoveryProvider";
import { RESOURCES, DIFFICULTY_COLORS, DIFFICULTY_BG } from "@/lib/discovery-data";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

export function DiscoveryToast() {
  const pathname = usePathname();
  const { discover, isDiscovered } = useDiscovery();
  const [notification, setNotification] = useState<{
    path: string;
    displayName: string;
    difficulty: string;
  } | null>(null);
  const prevPathRef = useRef<string>("");

  useEffect(() => {
    if (pathname === prevPathRef.current) return;
    prevPathRef.current = pathname;

    const resource = RESOURCES.find((r) => r.path === pathname);
    if (resource && !isDiscovered(resource.path)) {
      discover(resource.path);
      // Use a microtask to avoid synchronous setState in effect
      const notifData = {
        path: resource.path,
        displayName: resource.displayName,
        difficulty: resource.difficulty,
      };
      queueMicrotask(() => {
        setNotification(notifData);
      });
      const timer = setTimeout(() => setNotification(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [pathname, discover, isDiscovered]);

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -80, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -80, x: "-50%" }}
          className="fixed top-6 left-1/2 z-[100] pointer-events-none"
        >
          <div
            className={`pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-xl border backdrop-blur-md shadow-2xl ${DIFFICULTY_BG[notification.difficulty as keyof typeof DIFFICULTY_BG]}`}
            style={{ background: "rgba(15, 23, 42, 0.92)" }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <ShieldCheck className="h-6 w-6 text-cyan-400" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
                Resource Discovered!
              </span>
              <span className="text-slate-300 text-xs mt-0.5">
                {notification.displayName} —{" "}
                <span className={DIFFICULTY_COLORS[notification.difficulty as keyof typeof DIFFICULTY_COLORS]}>
                  {notification.difficulty.toUpperCase()}
                </span>
              </span>
              <span className="text-slate-500 text-[10px] font-mono mt-0.5">
                {notification.path}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
