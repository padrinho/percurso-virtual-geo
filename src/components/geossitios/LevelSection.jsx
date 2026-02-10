import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const levelConfig = {
  basic: { color: "bg-green-500", label: "🟢 Nível Básico", border: "border-green-500/30" },
  intermediate: { color: "bg-yellow-500", label: "🟡 Nível Intermédio", border: "border-yellow-500/30" },
  advanced: { color: "bg-red-500", label: "🔴 Nível Avançado", border: "border-red-500/30" },
};

export default function LevelSection({ level, title, text, didatica }) {
  const [open, setOpen] = useState(level === "basic");
  const config = levelConfig[level];

  if (!text) return null;

  return (
    <div className={`rounded-xl border ${config.border} bg-[#1a2a3a]/60 backdrop-blur overflow-hidden`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
      >
        <div>
          <span className="text-xs tracking-wider text-[#a0b4c8] uppercase">{config.label}</span>
          <h3 className="text-lg font-semibold text-white mt-1">{title}</h3>
        </div>
        <ChevronDown className={`w-5 h-5 text-[#a0b4c8] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 space-y-4">
              <div className="text-[#c8d6e5] leading-relaxed whitespace-pre-line text-sm md:text-base">
                {text}
              </div>
              {didatica && (
                <div className="bg-[#0f1a24]/60 rounded-lg p-4 border border-white/5">
                  <h4 className="text-sm font-semibold text-[#5b9bd5] mb-2">📚 Caixa Didática</h4>
                  <div className="text-[#a0b4c8] text-sm leading-relaxed whitespace-pre-line">
                    {didatica}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}