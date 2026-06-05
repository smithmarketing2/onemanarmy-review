"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need technical skills to use OneManArmy?",
      answer:
        "No. The 3-question setup wizard deploys bots without terminal commands, Docker, or API key hunting. If you can use a web browser, you can use OneManArmy.",
    },
    {
      question: "What if I've never used AI bots before?",
      answer:
        "That's exactly why I built the AI Army Mastery Mini-Course. It walks you through mindset, setup, and first campaign step-by-step. You'll be comfortable within a week.",
    },
    {
      question: "How is this different from ChatGPT or Claude?",
      answer:
        "ChatGPT and Claude are general-purpose AI. OneManArmy deploys three specialized bots — a planner, an executor, and a memory system — that work together as a team. It's like the difference between a Swiss Army knife and a toolbox.",
    },
    {
      question: "Can I really deploy in 5 minutes?",
      answer:
        "Yes. The wizard asks 3 questions. Your bot is live immediately. First mission can run in the same session.",
    },
    {
      question: "What if the bots break?",
      answer:
        "Hermes is specifically designed for stability. But if anything goes wrong, the 14-day guarantee means you can get a full refund. Plus my bonuses include troubleshooting guides.",
    },
    {
      question: "How do I get the bonuses?",
      answer:
        "After you purchase OneManArmy through my link, forward your receipt to [YOUR_EMAIL]. I'll send you the bonus download links within 24 hours.",
    },
    {
      question: "Is this a monthly subscription?",
      answer:
        "No. OneManArmy is a one-time payment. My bonuses are also one-time deliverables with no recurring fees.",
    },
    {
      question: "What if it's not for me?",
      answer:
        "OneManArmy offers a 14-day money-back guarantee. Try it risk-free. If you don't love it, get a full refund. The bonuses are yours to keep either way.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-slate-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
