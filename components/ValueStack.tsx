"use client";

import { ArrowRight } from "lucide-react";

export default function ValueStack() {
  const items = [
    { item: "OneManArmy Platform (One-Time Payment)", value: "$297" },
    { item: "🎓 AI Army Mastery Mini-Course", value: "$197" },
    { item: "📋 30-Day AI Army Launch Roadmap", value: "$147" },
    { item: "💬 AI Agent Prompt Mastery Pack", value: "$97" },
    { item: "🔌 CRM & Tool Integration Blueprint", value: "$97" },
    { item: "📊 AI Worker ROI Tracker", value: "$67" },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Here's Everything You're Getting Today
        </h2>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex justify-between items-center px-6 py-4 ${
                i !== items.length - 1 ? "border-b border-slate-200" : ""
              }`}
            >
              <span className="text-slate-700">{item.item}</span>
              <span className="font-semibold text-slate-900">{item.value}</span>
            </div>
          ))}
          <div className="flex justify-between items-center px-6 py-5 bg-indigo-50 border-t-2 border-indigo-200">
            <span className="text-lg font-bold text-indigo-900">TOTAL VALUE</span>
            <span className="text-xl font-bold text-indigo-900">$902</span>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-2xl font-bold text-slate-900 mb-2">
            Your Investment: Just $297
          </p>
          <p className="text-slate-500 mb-8">(One-Time Payment)</p>

          <a
            href="https://www.onemanarmy.net/special?aid=688027"
            target="_blank"
            rel="noopener sponsored"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-indigo-600/25"
          >
            Get OneManArmy + All Bonuses
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="mt-6 text-sm text-slate-500">
            14-day money-back guarantee. If you don't love it, get a full
            refund — and keep the bonuses.
          </p>
        </div>
      </div>
    </section>
  );
}
