"use client";

import { Check } from "lucide-react";

export default function WhatsIncluded() {
  const items = [
    "Command Dashboard — One view of all three bots",
    "Paperclip AI Commander — Planning and role design",
    "OpenClaw AI Field Operator — Execution and workflows",
    "Hermes AI Intelligence Specialist — Memory and learning",
    "AI Agent Library — One-click hire pre-built specialists",
    "Multi-Platform Access — Web, Telegram, Discord",
    "3-Question Setup Wizard — Deploy any bot in 5 minutes",
    "Persistent State — Bots remember across sessions",
    "14-Day Money-Back Guarantee — Risk-free trial",
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          What's Inside OneManArmy
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-200"
            >
              <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
