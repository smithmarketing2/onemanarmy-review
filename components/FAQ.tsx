"use client";

import { useState } from "react";

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
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center px-8 py-6 text-left font-bold hover:bg-white/5 transition-colors"
            >
              <span className="pr-4">{faq.q}</span>
              <span className={`text-slate-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`}>▼</span>
            </button>
            {openIndex === i && (
              <div className="px-8 pb-6 text-slate-400">{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
