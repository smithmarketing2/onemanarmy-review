"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need technical skills to use OneManArmy?",
      a: "No. The 3-question setup wizard deploys bots without terminal commands, Docker, or API key hunting. If you can use a web browser, you can use OneManArmy.",
    },
    {
      q: "What if I've never used AI bots before?",
      a: "That's exactly why I built the AI Army Mastery Mini-Course. It walks you through mindset, setup, and first campaign step-by-step. You'll be comfortable within a week.",
    },
    {
      q: "How is this different from ChatGPT or Claude?",
      a: "ChatGPT and Claude are general-purpose AI. OneManArmy deploys three specialized bots — a planner, an executor, and a memory system — that work together as a team.",
    },
    {
      q: "Can I really deploy in 5 minutes?",
      a: "Yes. The wizard asks 3 questions. Your bot is live immediately. First mission can run in the same session.",
    },
    {
      q: "Is there a money-back guarantee?",
      a: "Absolutely. You have 14 days to try OneManArmy risk-free. If you're not satisfied for any reason, email us for a full refund.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-slate-600">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
