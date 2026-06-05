"use client";

import { ArrowRight, Shield } from "lucide-react";

export default function ValueStack() {
  const items = [
    { item: "OneManArmy Platform (One-Time Payment)", value: "$297" },
    { item: "🎓 AI Army Mastery Mini-Course", value: "$197", highlight: true },
    { item: "📋 30-Day AI Army Launch Roadmap", value: "$147", highlight: true },
    { item: "💬 AI Agent Prompt Mastery Pack", value: "$97", highlight: true },
    { item: "🔌 CRM & Tool Integration Blueprint", value: "$97", highlight: true },
    { item: "📊 AI Worker ROI Tracker", value: "$67", highlight: true },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-16 text-center">
          Here's Everything You're{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Getting Today
          </span>
        </h2>

        <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex justify-between items-center px-8 py-5 ${
                i !== items.length - 1 ? "border-b border-slate-200" : ""
              } ${item.highlight ? "bg-indigo-50/50" : ""}`}
            >
              <span className={`text-lg ${item.highlight ? "font-semibold text-indigo-900" : "text-slate-700"}`}>
                {item.item}
              </span>
              <span className={`font-bold text-lg ${item.highlight ? "text-indigo-600" : "text-slate-900"}`}>
                {item.value}
              </span>
            </div>
          ))}
          <div className="flex justify-between items-center px-8 py-6 bg-gradient-to-r from-indigo-600 to-blue-600">
            <span className="text-xl font-bold text-white">TOTAL VALUE</span>
            <span className="text-2xl font-extrabold text-white">$902</span>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-5 py-2.5 mb-6">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">14-Day Money-Back Guarantee</span>
          </div>

          <p className="text-3xl font-extrabold text-slate-900 mb-2">
            Your Investment: Just <span className="text-indigo-600">$297</span>
          </p>
          <p className="text-slate-500 mb-10 text-lg">(One-Time Payment — No Monthly Fees)</p>

          <a
            href="https://www.onemanarmy.net/special?aid=688027"
            target="_blank"
            rel="noopener sponsored"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-amber-500/25"
          >
            Get OneManArmy + All Bonuses
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="mt-6 text-sm text-slate-500">
            If you don't love it, get a full refund — and keep the bonuses.
          </p>
        </div>
      </div>
    </section>
  );
}
